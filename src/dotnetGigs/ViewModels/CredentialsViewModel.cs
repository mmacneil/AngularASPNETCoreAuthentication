
using FluentValidation.Attributes;
using DotNetGigs.ViewModels.Validations;

 [Validator(typeof(CredentialsViewModelValidator))]
public class CredentialsViewModel  
{
        public string UserName { get; set; }
        public string Password { get; set; }        
}