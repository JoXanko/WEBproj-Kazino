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
    public class KazinoController : ControllerBase
    {
        public SvaKazina Context { get; set; }
        public KazinoController(SvaKazina context)
        {
            Context = context;
        }
        [Route("PreuzmiKazine")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiKazine()
        {
            try
            {
                return Ok(await Context.Kazino.Select(p =>
                new
                {
                    ID = p.ID,
                    Naziv = p.Naziv,
                    Drzava = p.Drzava,
                    Grad = p.Grad,
                    GodinaOsnivanja = p.GodinaOsnivanja
                }).ToListAsync());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("KazinoPretragaFromBody/{KazinoID}")]
        [HttpPut]
        public async Task<ActionResult> KazinoPretragaFromBody([FromRoute] int KazinoID)
        {
            try
            {
                var studentipopredmetu = Context.Kazino
                    .Where(p => p.ID == KazinoID);
                var student = await studentipopredmetu.ToListAsync();

                return Ok
                (
                    student.Select(p =>
                    new
                    {
                        ID = p.ID,
                        Naziv = p.Naziv,
                        Drzava = p.Drzava,
                        Grad = p.Grad,
                        GodinaOsnivanja = p.GodinaOsnivanja
                    }).ToList()
                );
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("PromeniKazino/{id}/{naziv}/{drzava}/{grad}/{godOsnivanja}")]
        [HttpPut]
        public async Task<ActionResult> Promeni(int id, string naziv, string drzava, string grad, int godOsnivanja)
        {
            if (string.IsNullOrWhiteSpace(naziv) || naziv.Length > 25)
                return BadRequest("Pogrešna vrednost za naziv.!");
            if (string.IsNullOrWhiteSpace(drzava) || drzava.Length > 25)
                return BadRequest("Pogrešna vrednost za drzavu.");
            if (string.IsNullOrWhiteSpace(grad) || grad.Length > 25)
                return BadRequest("Pogrešna vrednost za grad.");
            if (godOsnivanja < 0)
                return BadRequest("Pogrešna vrednost za godinu osnivanja.");

            try
            {
                var kazino = Context.Kazino.Where(p => p.ID == id).FirstOrDefault();
                //Kazino kazino = await Context.Kazino.FindAsync(id);
                if (kazino != null)
                {
                    kazino.Naziv = naziv;
                    kazino.Drzava = drzava;
                    kazino.Grad = grad;
                    kazino.GodinaOsnivanja = godOsnivanja;

                    await Context.SaveChangesAsync();
                    return Ok($"Uspešno promenjen kazino! ID: {kazino.ID}");
                }
                else
                {
                    return BadRequest("Kazino nije pronađen!");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("IzbrisatiKazino/{id}")]
        [HttpDelete]
        public async Task<ActionResult> IzbrisatiKazino(int id)
        {
            try
            {
                var kazino = Context.Kazino.Where(p => p.ID == id).FirstOrDefault();
                var dealeri = await Context.Dealer.Where(x => x.Kazino == kazino).ToListAsync();
                dealeri.ForEach(delaer =>
                {
                    Context.Dealer.Remove(delaer);
                });
                var osobeKazino = await Context.KazinoOsoba.Where(p => p.Kazino == kazino).ToListAsync();
                osobeKazino.ForEach(osobeKazino =>
                {
                    Context.KazinoOsoba.Remove(osobeKazino);
                });
                var picaKazino = await Context.PicaUKazinu.Where(p => p.Kazino == kazino).ToListAsync();
                picaKazino.ForEach(piceKazino =>
                {
                    Context.PicaUKazinu.Remove(piceKazino);
                });
                var igreKazno = await Context.IgreUKazinu.Where(p => p.Kazino == kazino).ToListAsync();
                igreKazno.ForEach(igraKazino =>
               {
                   Context.IgreUKazinu.Remove(igraKazino);
               });

                string naz = kazino.Naziv;
                Context.Kazino.Remove(kazino);
                await Context.SaveChangesAsync();
                return Ok($"Uspešno izbrisan kazino sa nazivom: {naz}");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}