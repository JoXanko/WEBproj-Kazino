using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class KazinoOsoba
    {
        [Key]
        public int ID { get; set; }        
        [Required]
        public int TrenutnoCipova { get; set; }
        [Required]
        public int PotrosenoCipova { get; set; }
        [JsonIgnore]
        public virtual Osoba Osoba { get; set; }
        public virtual Kazino Kazino { get; set; }
    }
}