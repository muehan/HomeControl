namespace HomeControl.Web.Controller
{
    using Microsoft.AspNet.Mvc;

    public class TemperaturController : Controller
    {
        // GET: /<controller>/
        public IActionResult Outdoor()
        {
            return View();
        }

        public IActionResult Indoor(string room)
        {
            return View();
        }
    }
}
