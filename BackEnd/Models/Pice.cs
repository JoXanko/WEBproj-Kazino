using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Models
{
    [Table("Pice")]
    public class Pice
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [MaxLength(15)]
        public string Naziv { get; set; }
        [Required]
        public bool Alkoholno { get; set; }
        public int ProcenatAlkohola { get; set; }
        public List<PicaUKazinu> PicaKazino { get; set; }
    }
}