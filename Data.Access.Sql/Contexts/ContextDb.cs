using System.Data.Entity;
using Data.Access.Sql.Configuration.Maps;
using Data.Access.Sql.Contexts.IContexts;
using Data.Access.Sql.Models;

namespace Data.Access.Sql.Contexts
{
    public class ContextDb: DbContext, IContextDb
    {
        public ContextDb() : base("name=DB") { }

        public DbSet<Hero> Heroes { get; set; }

        protected override void OnModelCreating(DbModelBuilder dbModelBuilder)
        {
            dbModelBuilder.Configurations.Add(HeroMap.Instance);
        }
    }
}
