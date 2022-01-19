using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class PicaUKazinu
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public int Cena { get; set; }
        public virtual Kazino Kazino { get; set; }
        public virtual Pice Pice { get; set; }
    }
}
