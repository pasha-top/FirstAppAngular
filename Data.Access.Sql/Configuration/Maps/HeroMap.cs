using System.Data.Entity.ModelConfiguration;
using Data.Access.Sql.Models;

namespace Data.Access.Sql.Configuration.Maps
{
    public class HeroMap : EntityTypeConfiguration<Hero>
    {
        public static readonly HeroMap Instance = new HeroMap();

        private HeroMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            this.Property(t => t.Name)
                .HasMaxLength(150);

         

            // Table & Column Mappings
            this.ToTable("Hero", "dbo");
            this.Property(t => t.Id).HasColumnName("Id_Hero");
            this.Property(t => t.Name).HasColumnName("Name");
        }
    }
}