using Hotel_Listings.Configurations.Contracts;
using Poke_Helper.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Poke_Helper.Models.Repositories;


public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    private PokeHelperDbContext _context;
    
    public GenericRepository(PokeHelperDbContext context)
    {
        _context = context;
    }

    public async Task<T?> GetOneAsync(object? id)
    {
        if (id is null)
        {
            return null;
        }

        return await _context.Set<T>().FindAsync(id);
    }

    public async Task<T?> GetOneAsync(Expression<Func<T, bool>> predicate)
    {
        return await _context.Set<T>().Where(predicate).FirstOrDefaultAsync();
    }

    public async Task<List<T>> GetAllAsync()
    {
        return await _context.Set<T>().ToListAsync();
    }

    public async Task<List<T>> GetAllAsync(Expression<Func<T, bool>> predicate)
    {
        return await _context.Set<T>().Where(predicate).ToListAsync();
    }

    public async Task<T> AddOneAsync(T entity)
    {
        await _context.AddAsync(entity);
        await _context.SaveChangesAsync();
        return entity;
    }

    public async Task DeleteOneAsync(object id)
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

    public async Task<bool> Exists(object id)
    {
        var entity = await GetOneAsync(id);
        _context.ChangeTracker.Clear();
        return entity != null;
    }
}