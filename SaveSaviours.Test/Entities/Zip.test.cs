using NUnit.Framework;
using SaveSaviours.Entities;
using System;

namespace SaveSaviours.UnitTests.Entities {
    [TestFixture]
    public class Zip_Test {
        private Zip munichZip;
        private Zip hamburgZip;

        [SetUp]
        public void SetUp() {
            munichZip = new Zip {
                Latitude = 48.137154F,
                Longitude = 11.576124F,
            };

            hamburgZip = new Zip {
                Latitude = 53.551086F,
                Longitude = 9.993682F,
            };
        }

        [Test]
        public void DistanceTo_MunichHamburg_ReturnCorrectDistance() {
            double expected = 612;
            var actual = munichZip.DistanceTo(hamburgZip);

            Assert.AreEqual((int)Math.Floor(actual), (int)Math.Floor(expected));
        }
    }
}
