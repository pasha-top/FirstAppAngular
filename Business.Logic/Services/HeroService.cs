using System.Collections.Generic;
using System.Linq;
using Business.Logic.Models;
using Business.Logic.Services.IServices;
using Data.Access.Sql.Contexts;
using  AutoMapper;

namespace Business.Logic.Services
{
    public class HeroService : IServices.IHeroService
    {
        private readonly ContextDb _context;
        public HeroService()
        {
            _context = new ContextDb();    
        }

        public List<Hero> GetHeroes()
        {
            var heroes = _context.Heroes.ToList();

            var result = heroes.Select(Mapper.Map<Hero>).ToList();

            return result;
        }
    }
}
