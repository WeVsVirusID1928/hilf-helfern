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
            // munichZip.Latitude = 48.137154;
            //     munichZip.Longitude = 11.576124;

            hamburgZip = new Zip {
                Latitude = 53.551086F,
                Longitude = 9.993682F,
            };
            // hamburgZip = new Zip();
            // hamburgZip.Latitude = 53.551086;
            // hamburgZip.Longitude = 9.993682;
        }

        [Test]
        public void DistanceTo_MunichHamburg_ReturnCorrectDistance() {
            double expected = 612;
            var actual = munichZip.DistanceTo(hamburgZip);

            Assert.AreEqual((int)Math.Floor(actual), (int)Math.Floor(expected));
        }
        // [TestCase(-1)]
        // [TestCase(0)]
        // [TestCase(1)]
        // public void IsPrime_ValuesLessThan2_ReturnFalse(int value) {
        //     var result = _primeService.IsPrime(value);

        //     Assert.IsFalse(result, $"{value} should not be prime");
        // }
    }
}
