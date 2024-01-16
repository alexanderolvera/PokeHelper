using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Poke_Helper.Configurations.Contracts;
using Poke_Helper.Data;
using Poke_Helper.Models.User;

namespace Poke_Helper.Controllers;

[ApiController]
[Route("api")]
public class PokeHelperController : ControllerBase
{
    private IUsersRepository _usersRepository;

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
        var user = await _usersRepository.GetOneAsync(dto.name);
        if (user == null)
        {
            user = await _usersRepository.AddOneAsync(new User { Name = dto.name });
            
        }
        return user.Id;
    }
}