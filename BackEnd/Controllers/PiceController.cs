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
    public class PiceController : ControllerBase
    {
        public SvaKazina Context { get; set; }
        public PiceController(SvaKazina context)
        {
            Context = context;
        }
        [Route("PicaUKazinu/{idKazino}")]
        [HttpPost]
        public async Task<ActionResult> PicaUKazinu(int idKazino)
        {
            try
            {
                var podaciOStudnetu = await Context.PicaUKazinu
                        .Include(p => p.Pice)
                        .Include(p => p.Kazino)
                        .Where(p => p.Kazino.ID == idKazino)
                        .Select(p =>
                        new
                        {
                            id = p.ID,
                            naziv = p.Pice.Naziv,
                            alkoholno = p.Pice.Alkoholno,
                            procenatAlkohola = p.Pice.ProcenatAlkohola,
                            cena = p.Cena
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