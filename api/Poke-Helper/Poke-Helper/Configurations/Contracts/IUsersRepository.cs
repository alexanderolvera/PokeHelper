using Hotel_Listings.Configurations.Contracts;
using Poke_Helper.Data;

namespace Poke_Helper.Configurations.Contracts;

public interface IUsersRepository : IGenericRepository<User>
{
    Task<User?> GetOneAsync(string? name);
}