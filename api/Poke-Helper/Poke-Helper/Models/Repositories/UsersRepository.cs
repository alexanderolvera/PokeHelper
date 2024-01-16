using Microsoft.EntityFrameworkCore;
using Poke_Helper.Configurations.Contracts;
using Poke_Helper.Data;

namespace Poke_Helper.Models.Repositories;

public class UsersRepository : GenericRepository<Data.User>, IUsersRepository
{
    private PokeHelperDbContext _context;

    public UsersRepository(PokeHelperDbContext context) : base(context)
    {
        _context = context;
    }

    public async Task<Data.User?> GetOneAsync(string name)
    {
        var context = _context.Set<Data.User>();
        return await context.Where(x => x.Name == name).FirstOrDefaultAsync();
    }
}