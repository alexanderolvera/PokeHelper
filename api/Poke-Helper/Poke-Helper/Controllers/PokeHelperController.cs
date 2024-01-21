using Microsoft.AspNetCore.Mvc;
using Poke_Helper.Configurations.Contracts;
using Poke_Helper.Data;
using Poke_Helper.Models.User;

namespace Poke_Helper.Controllers;

[ApiController]
[Route("api")]
public class PokeHelperController : ControllerBase
{
    private readonly IUsersRepository _usersRepository;

    public PokeHelperController(IUsersRepository usersRepository)
    {
        _usersRepository = usersRepository;
    }
    
    [HttpGet("health")]
    public NoContentResult Health()
    {
        return NoContent();
    }

    [HttpPut("login")]
    public async Task<ActionResult<Guid>> Login(LoginUserDto dto)
    {
        var user = await _usersRepository.GetOneAsync(x => x.Name == dto.Name);

        if (user == null)
        {
            user = await _usersRepository.AddOneAsync(new User { Name = dto.Name });
        }

        return user.Id;
    }
}