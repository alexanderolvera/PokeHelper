using Microsoft.AspNetCore.Mvc;
using Poke_Helper.Attributes;
using Poke_Helper.Configurations.Contracts;
using Poke_Helper.Data;

namespace Poke_Helper.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/favorites")]
    public class FavoritesController : ControllerBase
    {
        private readonly IFavoritesRepository _favoritesRepository;
        private Guid _userId
        {
            get
            {
                Guid.TryParse(Request.Headers.Authorization, out var userId);
                return userId;
            }
        }

        public FavoritesController(IFavoritesRepository favoritesRepository)
        {
            _favoritesRepository = favoritesRepository;
        }

        [HttpGet("")]
        public async Task<ActionResult<List<string>>> GetFavorites([FromQuery] List<string>? pokemonNames = null)
        {
            var favorites = (await _favoritesRepository
                .GetAllAsync(x => x.UserId == _userId && (pokemonNames == null || pokemonNames.Contains(x.PokemonName))))
                ?.Select(x => x.PokemonName)
                .ToList();

            return favorites ?? new List<string>();
        }

        [HttpPost("")]
        public async Task<ActionResult<Guid>> AddFavorite(string pokemonName)
        {
            var favorite = await _favoritesRepository
                .GetOneAsync(x => x.UserId == _userId && x.PokemonName == pokemonName);

            if (favorite == null)
            {
                favorite = await _favoritesRepository.AddOneAsync(new Favorite
                {
                    UserId = _userId,
                    PokemonName = pokemonName
                });

            }

            return favorite.Id;
        }

        [HttpDelete("{pokemonName}")]
        public async Task<ActionResult<bool>> Unfavorite(string pokemonName)
        {
            var favorite = await _favoritesRepository
                .GetOneAsync(x => x.UserId == _userId && x.PokemonName == pokemonName);

            if (favorite == null)
            {
                return false;
            }

            await _favoritesRepository.DeleteOneAsync(favorite.Id);

            return true;
        }
    }
}
