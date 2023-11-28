import React, { useEffect } from 'react';
import ava from '../public/avatar.png';
import card1 from '../public/card1.jpg';
import card2 from '../public/card2.jpg';
import card3 from '../public/card3.jpg';
import card4 from '../public/card4.jpg';
import gsap from "gsap";

export default function eqiq() {

    useEffect(() => {  
           const tl = gsap.timeline();
        tl.fromTo(".avaimg", {x:500 ,  y: 30, duration: 1, ease: "elastic", scale: 0.5 ,rotate: 270 },
        { x: 200,y:30 , duration: 1, ease: "smooth", scale: 1 , rotate: 270}, ).fromTo(".avaimg", { x: 200,y:30 , duration: 1, ease: "elastic", scale: 1 ,rotate: 270 },
        { x: 0,y:0 , duration: 1, ease: "smooth", scale: 1, rotate:360 }, );

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

          <div style={{ minWidth: '300px', flexShrink: 0 , display:'flex' , flexDirection:'row'}}>
     
            <img src={card1.src} alt="Description of the image" style={{ width: '80%', height: '80%'  }}/>
            <img src={card2.src} alt="Description of the image" style={{ width: '80%', height: '80%'  }}/>
            <img src={card3.src} alt="Description of the image" style={{ width: '80%', height: '80%'  }}/>
            <img src={card4.src} alt="Description of the image" style={{ width: '80%', height: '80%'  }}/>
            <img src={card1.src} alt="Description of the image" style={{ width: '80%', height: '80%'  }}/>
         
          </div>
        
        </div>
      </div>
    </div>
  );
}
