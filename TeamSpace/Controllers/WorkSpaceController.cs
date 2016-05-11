using System.Web.Mvc;

namespace TeamSpace.Controllers
{
    public class WorkSpaceController : Controller
    {
        // GET: WorkSpace
        public ActionResult Index()
        {
             return View();
        }

        public ActionResult Create()
        {
            return View();
        }

        public ActionResult Drive()
        {
            return View();
        }
    }
}