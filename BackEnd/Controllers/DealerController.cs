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
    public class DealerController : ControllerBase
    {
        public SvaKazina Context { get; set; }
        public DealerController(SvaKazina context)
        {
            Context = context;
        }
        [Route("DodajDealera/{jmbg}/{ime}/{prezime}/{pol}/{godine}/{plata}/{idKazina}")]
        [HttpPost]
        public async Task<ActionResult> DodajDealera(long jmbg, string ime, string prezime, string pol, int godine, int plata, int idKazina)
        {
            Dealer dealeri = await Context.Dealer.Where(x => x.JMBG == jmbg).FirstOrDefaultAsync();
            if (dealeri!=null)
            {
                return BadRequest("Vec postoji osoba sa istim jmbg-om. Jedna osoba ne moze biti zaposlena u vise razlicitih kazina.");
                
            }
            else {
                Dealer dealer = new Dealer();
                dealer.JMBG = jmbg;
                dealer.Ime = ime;
                dealer.Prezime = prezime;
                dealer.Pol = pol;
                dealer.Godine = godine;
                dealer.GodineRada = 0;
                dealer.PlataEUR = plata;
                Kazino trazeniKazino = await Context.Kazino.FirstOrDefaultAsync(b => b.ID == idKazina);
                dealer.Kazino = trazeniKazino;
                if (dealer.JMBG < 1000000000000 || dealer.JMBG > 9999999999999)
                    return BadRequest("Pogrešna vrednost jmbg-a!");
                if (string.IsNullOrWhiteSpace(dealer.Ime) || dealer.Ime.Length > 25)
                    return BadRequest("Pogrešna vrednost imena!");
                if (string.IsNullOrWhiteSpace(dealer.Prezime) || dealer.Prezime.Length > 25)
                    return BadRequest("Pogrešna vrednost prezimena!");
                if (string.IsNullOrWhiteSpace(dealer.Pol) || dealer.Pol.Length > 8)
                    return BadRequest("Pogrešna vrednost prezimena!");
                if (dealer.Godine > 66 || dealer.Godine < 18)
                    return BadRequest("Pogrešna vrednost godina starosti!");
                if (dealer.GodineRada > 64 || dealer.GodineRada + 18 > dealer.Godine)
                    return BadRequest("Pogrešna vrednost godina rada!");
                if (dealer.PlataEUR < 0)
                    return BadRequest("Pogrešna vrednost plate!");

                Context.Dealer.Add(dealer);
                await Context.SaveChangesAsync();
                return Ok($"Dealer je dodat! ID je: {dealer.ID}");
            }
        }
        [Route("IzbrisatiDealera/{id}")]
        [HttpDelete]
        public async Task<ActionResult> IzbrisatiDealera(int id)
        {
            try
            {
                var dealers = Context.Dealer.Where(p => p.ID == id).FirstOrDefault();
                long jmbg = dealers.JMBG;
                Context.Dealer.Remove(dealers);
                await Context.SaveChangesAsync();
                return Ok($"Uspešno izbrisan delaer-a sa jmbg-om: {jmbg}");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("VratiDealere/{KazinoID}")]
        [HttpPut]
        public async Task<ActionResult> VratiDealere([FromRoute] int KazinoID)
        {
            try
            {
                var kazinoRadnici = Context.Dealer
                    .Where(p => p.Kazino.ID == KazinoID);
                var dealers = await kazinoRadnici.ToListAsync();

                return Ok
                (
                    dealers.Select(p =>
                    new
                    {
                        ID = p.ID,
                        JMBG = p.JMBG,
                        Ime = p.Ime,
                        Prezime = p.Prezime,
                        Pol = p.Pol,
                        Godine = p.Godine,
                        GodineRada = p.GodineRada,
                        PlataEUR = p.PlataEUR,
                        Kazino = p.Kazino
                    }).ToList()
                );
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}