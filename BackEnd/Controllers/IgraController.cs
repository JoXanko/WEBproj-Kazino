using Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace WEB_Projekat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IgraController : ControllerBase
    {
        public SvaKazina Context { get; set; }
        public IgraController(SvaKazina context)
        {
            Context = context;
        }
        [Route("IgreUKazinu/{idKazino}")]
        [HttpPost]
        public async Task<ActionResult> IgreUKazinu(int idKazino)
        {
            try
            {
                var podaciOStudnetu = await Context.IgreUKazinu
                        .Include(p => p.Igra)
                        .Include(p => p.Kazino)
                        .Where(p => p.Kazino.ID == idKazino)
                        .Select(p =>
                        new
                        {
                            id = p.ID,
                            naziv = p.Igra.Naziv,
                            maxBrIgraca = p.Igra.MaximalniBrojIgraca,
                            opis = p.Igra.Opis,
                            minimalniUlog = p.MinimalniUlog
                        }).ToListAsync();
                return Ok(podaciOStudnetu);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}