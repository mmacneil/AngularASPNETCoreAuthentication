

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using DotNetGigs.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace DotNetGigs.Data
{
public class ApplicationDbContext : IdentityDbContext<AppUser> 
{
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }
        
        public DbSet<JobSeeker> JobSeekers { get; set; }
    }
}
 
 