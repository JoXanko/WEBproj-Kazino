using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Models
{
    [Table("Igra")]
    public class Igra
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [MaxLength(25)]
        public string Naziv { get; set; }
        [Required]
        public int MaximalniBrojIgraca { get; set; }
        public string Opis { get; set; }
        public List<IgreUKazinu> IgraKazino { get; set; }
    }
}