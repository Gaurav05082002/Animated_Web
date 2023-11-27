import React, { useEffect } from 'react';
import ava from '../public/avatar.png';
import card1 from '../public/card1.jpg';
import card2 from '../public/card2.jpg';
import card3 from '../public/card3.jpg';
import card4 from '../public/card4.jpg';
import gsap from "gsap";

export default function eqiq() {

    useEffect(() => {  

        gsap.fromTo(".avaimg", {duration: 2, rotation: 0, transformOrigin: "110px +230px" , opacity:0.2 , scale: 0.1 } , {duration: 1, rotation: 360, transformOrigin: "110px +200px" , opacity:1 , scale: 1 , ease: 'smooth' } );
        gsap.fromTo(
            ".downheading",
            { x: -100, duration: 1.5, ease: "elastic", scale: 0.5 },
            { x: 0, duration: 1, ease: "slow", scale: 1 },
           
          );
          gsap.fromTo(
            ".upheading",
            { x: -100, duration: 1.5, ease: "elastic", scale: 0.5 },
            { x: 0, duration: 1, ease: "slow", scale: 1 },
           
          );
     }, []);

  return (
    <div style={{ height: '86vh',  margin: '0 4vw', background: 'white' , fontFamily: 'Arial' }}>
      {/* Upper Div */}
      <div style={{ height: '40%', display: 'flex', flexDirection: 'row'  ,fontFamily: 'Arial' , marginTop:'2%' , justifyContent: 'space-evenly'  }}>
        {/* Three divs*/}
        <div style={{ width: '25%', padding: '10px' , fontFamily: 'Arial' }}>
          <h2 className='downheading'>EQ beats IQ</h2>
        </div>
        <div style={{ width: '25%', padding: '10px'  , fontFamily: 'Arial'}}>
          <p>
            Not having your own emotions under control might be holding you back.Not having your own emotions under control might be holding you back
          </p>
        </div>
        <div style={{ width: '25%', padding: '10px',fontFamily: 'Arial' }}>
          <p>
            Not having your own emotions under control might be holding you back.Not having your own emotions under control might be holding you back
          </p>
        </div>
      </div>

      {/* Lower Div */}
      <div style={{ height: '60%', display: 'flex', flexDirection: 'column' }}>
      <div style={{display:'flex' , flexDirection: 'row' , paddingLeft: '7%'}} >
      <h1 className='upheading' >Does this sound familiar ...</h1>
  
        <img
          src={ava.src}
          className='avaimg'
          alt="Description of the image"
          style={{ width: '45', height: '45' , borderRadius: '50%' }}
        />
      </div>
        

        {/* Scrollable Cards */}
        <div
          style={{
            overflowX: 'auto',
            display: 'flex',
            gap: '10px',
            padding: '10px',
          }}
        >
          {/* Add as many cards as needed */}
          <div style={{ minWidth: '300px', flexShrink: 0 , display:'flex' , flexDirection:'row'}}>
            {/* Card Content */}
            <img src={card1.src} alt="Description of the image" style={{ width: '80%', height: '80%'  }}/>
            <img src={card2.src} alt="Description of the image" style={{ width: '80%', height: '80%'  }}/>
            <img src={card3.src} alt="Description of the image" style={{ width: '80%', height: '80%'  }}/>
            <img src={card4.src} alt="Description of the image" style={{ width: '80%', height: '80%'  }}/>
            <img src={card1.src} alt="Description of the image" style={{ width: '80%', height: '80%'  }.src} alt="Description of the image" style={{ width: '80%', height: '80%'  }}/>
            {/* Card Content */}
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
}
