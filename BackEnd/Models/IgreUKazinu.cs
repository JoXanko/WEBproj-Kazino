using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class IgreUKazinu
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public int MinimalniUlog { get; set; }
        public Kazino Kazino { get; set; }
        public Igra Igra { get; set; }
    }
}
