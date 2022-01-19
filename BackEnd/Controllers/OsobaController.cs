using Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace WEB_Projekat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OsobaController : ControllerBase
    {
        public SvaKazina Context { get; set; }
        public OsobaController(SvaKazina context)
        {
            Context = context;
        }
        [HttpPut]
        [Route("osobaDodajCipove/{osobaID}/{brCipova}")]
        public async Task<IActionResult> osobaDodajCipove(int osobaID, int brCipova)
        {
            KazinoOsoba b = await Context.KazinoOsoba.FindAsync(osobaID);
            if (b == null) return StatusCode(404);
            b.TrenutnoCipova = b.TrenutnoCipova + brCipova;
            await Context.SaveChangesAsync();
            return StatusCode(204);
        }
        [Route("OsobeUKazinu/{idKazino}")]
        [HttpPost]
        public async Task<ActionResult> OsobeUKazinu(int idKazino)
        {
            try
            {
                var podaciOStudnetu = await Context.KazinoOsoba
                        .Include(p => p.Osoba)
                        .Include(p => p.Kazino)
                        .Where(p => p.Kazino.ID == idKazino)
                        .Select(p =>
                        new
                        {
                            id = p.ID,
                            jmbg = p.Osoba.JMBG,
                            ime = p.Osoba.Ime,
                            prezime = p.Osoba.Prezime,
                            pol = p.Osoba.Pol,
                            godine = p.Osoba.Godine,
                            trenutnoCipova = p.TrenutnoCipova,
                            potrosenoCipova = p.PotrosenoCipova
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