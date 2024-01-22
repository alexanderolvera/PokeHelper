namespace Poke_Helper.Data;

public class Favorite
{
    public Guid Id { get; set; }
    
    public string PokemonName { get; set; } = string.Empty;

    public Guid UserId { get; set; }
}