using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Osoba")]
    public class Osoba
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [Range(1000000000000, 9999999999999)]
        public long JMBG { get; set; }
        [Required]
        [MaxLength(25)]
        public string Ime { get; set; }
        [Required]
        [MaxLength(25)]
        public string Prezime { get; set; }
        [Required]
        public string Pol { get; set; }
        [Required]
        [Range(18, 100)]
        public int Godine { get; set; }
        public virtual List<KazinoOsoba> OsobaKazino { get; set; }
    }
}