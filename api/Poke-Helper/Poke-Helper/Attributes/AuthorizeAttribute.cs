using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using Poke_Helper.Configurations.Contracts;

namespace Poke_Helper.Attributes
{
    public class AuthorizeAttribute : Attribute, IAsyncAuthorizationFilter
    {
        public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
        {
            var authHeader = context.HttpContext.Request.Headers.Authorization;

            if (!string.IsNullOrEmpty(authHeader) && Guid.TryParse(authHeader, out var userId))
            {
                var userRepository = context.HttpContext.RequestServices.GetRequiredService<IUsersRepository>();

                if (await userRepository.Exists(userId))
                {
                    return;
                }
            }

            context.Result = new UnauthorizedResult();
        }
    }
}
