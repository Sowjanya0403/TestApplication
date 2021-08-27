using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Threading.Tasks;
using TestApplication.Controllers;
using TestApplication.Models;

namespace APIUnitTesting
{
    [TestClass]
    public class MoviesUnitTest
    {
        private List<MoviesListObj> mockMoviesListObj;
        private MoviesSearchObj mockMoviesSearchObj;
        private MoviesController controller;


        [TestInitialize]
        public void InitializeTestData()
        {
            controller = new MoviesController();
            mockMoviesListObj = new List<MoviesListObj>();
            mockMoviesSearchObj = new MoviesSearchObj();
        }

        [TestMethod]
        public void MovieLisAPITest()
        {
           //Test Case
        }

        public List<MoviesListObj> getMockResponseObject()
        {
            return new List<MoviesListObj>()
            {
                new MoviesListObj()
                {
                    Language = "HINDI",
                    Location = "PUNE",
                    Plot = "Harry's fourth year at Hogwarts is about to start and he is enjoying the summer vacation with his friends. They get the tickets to The Quidditch World Cup Final but after the match is over, people dressed like Lord Voldemort's 'Death Eaters' set a fire to all the visitors' tents, coupled with the appearance of Voldemort's symbol, the 'Dark Mark' in the sky, which causes a frenzy across the magical community. That same year, Hogwarts is hosting 'The Triwizard Tournament', a magical tournament between three well-known schools of magic : Hogwarts, Beauxbatons and Durmstrang. The contestants have to be above the age of 17, and are chosen by a magical object called Goblet of Fire. On the night of selection, however, the Goblet spews out four names instead of the usual three, with Harry unwittingly being selected as the Fourth Champion. Since the magic cannot be reversed, Harry is forced to go with it and brave three exceedingly difficult tasks.",
                    Poster = "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
                    SoundEffects = new List<string>() { "RX6", "SDDS" },
                    Stills = new List<string>()
                    {
                        "https://i.imgur.com/i3aD05u.png",
                        "https://i.imgur.com/ABinULO.gif",
                        "https://i.imgur.com/Wflfyct.gif"
                    },
                    Title = "Harry Potter and the Goblet of Fire",
                    ImdbID = "tt0330373",
                    ListingType = "NOW_SHOWING",
                    ImdbRating = "7.7"
                }
            };
            return mockMoviesListObj;
        }
    }
}
