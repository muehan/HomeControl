using System.Collections.Generic;
using System.IO;
using HomeControl.Domain;
using Newtonsoft.Json;

namespace HomeControl.DataAccess
{
    public class LightPersistanceService
    {

        public List<Room> GetRooms()
        {
            string json = File.ReadAllText("~./Config/rooms.json");

            List<Room> rooms = JsonConvert.DeserializeObject<List<Room>>(json);

            return rooms;
        }
    }
}
