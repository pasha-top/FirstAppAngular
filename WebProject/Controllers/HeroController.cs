using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Business.Logic.Services;
using Business.Logic.Services.IServices;

namespace MvcWithAngular2.Controllers
{

    public class HeroController : Controller
    {
        private readonly IHeroService _heroservice;

        public HeroController()
        {
            _heroservice = new HeroService();
        }
        [HttpGet]
        public JsonResult GetHeroes()
        {
            var result = _heroservice.GetHeroes();

            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}