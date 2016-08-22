using System.Collections.Generic;

namespace HomeControl.Domain
{
    public class Room
    {
        public string Name { get; set; }

        public List<Light> Lights { get; set; }

    }
}
