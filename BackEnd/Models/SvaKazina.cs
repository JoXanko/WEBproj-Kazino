using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class SvaKazina : DbContext
    {
        public DbSet<Kazino> Kazino { get; set; }
        public DbSet<Osoba> Osoba { get; set; }
        public DbSet<Dealer> Dealer { get; set; }
        public DbSet<Igra> Igra { get; set; }
        public DbSet<Pice> Pice { get; set; }
        public DbSet<KazinoOsoba> KazinoOsoba { get; set; }
        public DbSet<IgreUKazinu> IgreUKazinu { get; set; }
        public DbSet<PicaUKazinu> PicaUKazinu { get; set; }
        public SvaKazina(DbContextOptions options) : base(options)
        {

        }

    }
}