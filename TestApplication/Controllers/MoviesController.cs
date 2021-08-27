using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TestApplication.Models;

namespace TestApplication.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        [Route("list")]
        [HttpPost]
        [ProducesResponseType(typeof(List<MoviesListObj>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> GetMovieList([FromBody] MoviesSearchObj requestObj)
        {
            List<MoviesListObj> moviesList = new List<MoviesListObj>();

            //Fetching Data from JSON File
            string JSON = System.IO.File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), $"{"movies.json"}"));
            moviesList = Newtonsoft.Json.JsonConvert.DeserializeObject<List<MoviesListObj>>(JSON);

            //Filtering Basing on Selected Langugae
            if (requestObj.SelectedLanguage.Count() > 0)
            {
                moviesList = moviesList.Where(c => requestObj.SelectedLanguage.Contains(c.Language)).ToList();
            }

            // Filtering Basing on Selected Location
            if (requestObj.SelectedLocation.Count() > 0)
            {
                moviesList = moviesList.Where(c => requestObj.SelectedLocation.Contains(c.Location)).ToList();
            }
            return Ok(moviesList);
        }
    }
}
