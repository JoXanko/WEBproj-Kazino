using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    [Table("Dealer")]
    public class Dealer
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
        [MaxLength(8)]
        public string Pol { get; set; }
        [Required]
        [Range(18, 64)]
        public int Godine { get; set; }
        [Required]
        public int GodineRada { get; set; }
        [Required]
        public int PlataEUR { get; set; }
        public Kazino Kazino{get;set;}
    }
}