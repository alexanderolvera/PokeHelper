using System.Linq.Expressions;

namespace Hotel_Listings.Configurations.Contracts;

public interface IGenericRepository<T> where T : class
{
    Task<T?> GetOneAsync(object? id);
    Task<T?> GetOneAsync(Expression<Func<T, bool>> predicate);
    Task<List<T>> GetAllAsync();
    Task<List<T>> GetAllAsync(Expression<Func<T, bool>> predicate);
    Task<T> AddOneAsync(T entity);
    Task DeleteOneAsync(object id);
    Task UpdateOneAsync(T entity);
    Task<bool> Exists(object id);

}