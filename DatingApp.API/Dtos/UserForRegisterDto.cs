using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(255, MinimumLength = 8, ErrorMessage = "Password must be between 8 and 255 characters.")]
        public string Password { get; set; }
    }
}