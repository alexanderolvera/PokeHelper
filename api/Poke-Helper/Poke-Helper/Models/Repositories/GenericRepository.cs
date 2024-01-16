using Hotel_Listings.Configurations.Contracts;
using Poke_Helper.Data;
using Microsoft.EntityFrameworkCore;
namespace Poke_Helper.Models.Repositories;


public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    private PokeHelperDbContext _context;
    
    public GenericRepository(PokeHelperDbContext context)
    {
        _context = context;
    }

    public async Task<T?> GetOneAsync(int? id)
    {
        if (id is null)
        {
            return null;
        }

        return await _context.Set<T>().FindAsync(id);
    }

    public async Task<List<T>> GetAllAsync()
    {
        return await _context.Set<T>().ToListAsync();
    }

    public async Task<T> AddOneAsync(T entity)
    {
        await _context.AddAsync(entity);
        await _context.SaveChangesAsync();
        return entity;
    }

    public async Task DeleteOneAsync(int id)
    {
        var entity = await GetOneAsync(id);
        if (entity != null)
        {
            _context.Set<T>().Remove(entity);
        }
        await _context.SaveChangesAsync();
    }

    public async Task UpdateOneAsync(T entity)
    {
        Console.WriteLine(entity);
        var context = _context.Set<T>();
        context.Update(entity);
        context.Entry(entity).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task<bool> Exists(int id)
    {
        var entity = await GetOneAsync(id);
        _context.ChangeTracker.Clear();
        return entity != null;
    }
}