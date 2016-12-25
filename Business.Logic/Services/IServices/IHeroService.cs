using System.Collections.Generic;
using Business.Logic.Models;

namespace Business.Logic.Services.IServices
{
    public interface IHeroService
    {
        List<Hero> GetHeroes();
    }
}
