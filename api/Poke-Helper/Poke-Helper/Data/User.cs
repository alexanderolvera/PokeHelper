namespace Poke_Helper.Data;

public class User
{
    public Guid Id { get; set; }
    
    public string Name { get; set; } = string.Empty;

    public virtual List<Favorite> Favorites { get; set; } = new List<Favorite>();
}