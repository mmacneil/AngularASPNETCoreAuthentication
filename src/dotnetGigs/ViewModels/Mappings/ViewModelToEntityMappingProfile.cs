using AutoMapper;
using DotNetGigs.Models.Entities;

namespace DotNetGigs.ViewModels.Mappings 
{
    public class ViewModelToEntityMappingProfile : Profile
    {
        public ViewModelToEntityMappingProfile()
        {
              CreateMap<RegistrationViewModel,AppUser>()
              .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
        }
    }
}