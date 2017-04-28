using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace DotNetGigs.Models.Entities
{
    // Add profile data for application users by adding properties to this class
    public class AppUser : IdentityUser
    {
        // Extended Properties
       public string FirstName { get; set; }
       public string LastName { get; set; }       
    }
}
 