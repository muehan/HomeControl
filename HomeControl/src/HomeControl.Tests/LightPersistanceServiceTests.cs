using HomeControl.DataAccess;
using NUnit.Framework;

namespace HomeControl.Tests
{
    [TestFixture]
    public class LightPersistanceServiceTests
    {

        [Test]
        public void GetRooms_void_Returns()
        {
            var dut = new LightPersistanceService();
            var rooms = dut.GetRooms();
        }

    }
}
