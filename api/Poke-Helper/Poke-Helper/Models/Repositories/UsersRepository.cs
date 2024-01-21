using Microsoft.EntityFrameworkCore;
using Poke_Helper.Configurations.Contracts;
using Poke_Helper.Data;

namespace Poke_Helper.Models.Repositories;

public class UsersRepository : GenericRepository<Data.User>, IUsersRepository
{
    public UsersRepository(PokeHelperDbContext context) : base(context)
    {
    }
}