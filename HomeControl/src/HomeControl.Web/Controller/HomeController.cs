﻿namespace HomeControl.Web.Controller
{
    using Microsoft.AspNet.Mvc;

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
