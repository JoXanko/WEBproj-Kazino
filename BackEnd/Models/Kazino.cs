using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Kazino")]
    public class Kazino
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [MaxLength(25)]
        public string Naziv { get; set; }
        [Required]
        [MaxLength(25)]
        public string Drzava { get; set; }
        [Required]
        [MaxLength(25)]
        public string Grad { get; set; }
        [Required]
        public int GodinaOsnivanja { get; set; }
        public List<IgreUKazinu> Igre { get; set; }
        public List<PicaUKazinu> Pica { get; set; }
        public List<Dealer> Radnici { get; set; }
        [JsonIgnore]
        public virtual List<KazinoOsoba> Osobe { get; set; }
    }
}