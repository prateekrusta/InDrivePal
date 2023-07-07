import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
const DriverRated = (props) => {
  return (
    <div style={{display:'flex', flexDirection:'row', marginLeft:'2vw', alignItems:'center'}} >
     <div style={{marginTop:'2vh'}}>
        <AccountCircleIcon style={{fontSize:45, color:'#068FFF'}} />
     </div>
      <div style={{display:'flex', flexDirection:'column', marginLeft:'2vw'}}>
        <h3 style={{alignSelf:'flex-start'}}>{props.name}</h3>
        <div style={{marginTop:-10}}><StarIcon style={{color:'goldenrod'}}/><StarIcon style={{color:'goldenrod'}} /><StarIcon style={{color:'goldenrod'}} /><StarIcon style={{color:'goldenrod'}} /></div>
      </div>
    </div>
  );
};

export default DriverRated;
