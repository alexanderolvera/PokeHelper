using Hotel_Listings.Configurations.Contracts;
using Microsoft.EntityFrameworkCore;
using Poke_Helper.Configurations.Contracts;
using Poke_Helper.Data;
using Poke_Helper.Models.Repositories;

var builder = WebApplication.CreateBuilder(args);

var dbString = builder.Configuration.GetConnectionString("PostgresqlDatabaseConnectionString");
builder.Services.AddDbContext<PokeHelperDbContext>(options => options.UseNpgsql(dbString));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "AllowAll",
        policyBuilder => policyBuilder.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());
});

builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
builder.Services.AddScoped(typeof(IUsersRepository), typeof(UsersRepository));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetService<PokeHelperDbContext>();
    db.Database.Migrate();
}

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();