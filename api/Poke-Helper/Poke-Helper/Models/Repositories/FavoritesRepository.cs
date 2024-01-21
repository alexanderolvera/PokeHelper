using Poke_Helper.Configurations.Contracts;
using Poke_Helper.Data;

namespace Poke_Helper.Models.Repositories
{
    public class FavoritesRepository : GenericRepository<Data.Favorite>, IFavoritesRepository
    {
        public FavoritesRepository(PokeHelperDbContext context) : base(context)
        {
        }
    }
}
