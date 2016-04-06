namespace HomeControl.Web
{
    using System;

    using Microsoft.AspNet.Builder;
    using Microsoft.AspNet.Routing;

    public class RoutingProvider
    {
        public static Action<IRouteBuilder> GetRoutes()
        {
            return routes =>
                {
                    routes.MapRoute(
                        name: "default",
                        template: "{controller}/{action}/{id?}",
                        defaults: new { controller = "Home", action = "index" });
                };
        }
    }
}