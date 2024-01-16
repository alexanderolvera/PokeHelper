using Microsoft.EntityFrameworkCore;
namespace Poke_Helper.Data;

public class PokeHelperDbContext : DbContext
{
    
    public DbSet<User> Users { get; set; }
    public DbSet<Favorite> Favorites { get; set; }

    public PokeHelperDbContext(DbContextOptions options): base(options)
    {
        
    }
    
}