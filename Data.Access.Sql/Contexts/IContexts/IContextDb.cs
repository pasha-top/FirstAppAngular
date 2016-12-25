using System.Data.Entity;
using Data.Access.Sql.Models;

namespace Data.Access.Sql.Contexts.IContexts
{
    public interface IContextDb
    {
         DbSet<Hero> Heroes { get; set; } 
    }
}
