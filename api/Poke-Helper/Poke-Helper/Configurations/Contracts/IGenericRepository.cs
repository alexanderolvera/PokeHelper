namespace Hotel_Listings.Configurations.Contracts;

public interface IGenericRepository<T> where T : class
{
    Task<T?> GetOneAsync(int? id);
    Task<List<T>> GetAllAsync();
    Task<T> AddOneAsync(T entity);
    Task DeleteOneAsync(int id);
    Task UpdateOneAsync(T entity);
    Task<bool> Exists(int id);

}