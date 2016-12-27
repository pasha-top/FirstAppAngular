using AutoMapper;
using Business.Logic.Models;
using DA=Data.Access.Sql.Models;

namespace Business.Logic.Configuration
{
    public static class MappingConfig
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<DA.Hero, Hero>();
            });
        }
    }
}
