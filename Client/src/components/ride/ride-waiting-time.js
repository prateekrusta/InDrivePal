import '../../assets/css/book-ride.css';

const WaitingTime = () => {
    return(
      <div className='waiting-outer' style={{display:'flex', flexDirection:'row', marginLeft:'1vw', justifyContent:'space-between'}}>
       <div style={{display:'flex', flexDirection:'column', marginLeft:'1vw'}}>
        <h2 style={{textAlign:'left',  fontSize:'30px', color:'black'}}>ETA</h2>
        <h3 style={{fontWeight:100, color: 'grey', textAlign:'left', marginTop:-15}}>Please be on time!</h3> 
       </div>
       <h1 style={{textAlign:'right', marginTop:'2.5vh'}}>6mins</h1>
      </div>
)}

export default WaitingTime