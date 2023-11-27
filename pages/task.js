import React, { use } from 'react';
import gsap from "gsap";
import { useEffect } from 'react';

export default function task() {


    useEffect(() => {  


        gsap.fromTo(
            ".taskdownheading",
            { x: 0, duration: 1.5, ease: "elastic", scale: 0.5 ,opacity:0 },
            { x: 0, duration: 1, ease: "slow", scale: 1 , opacity:1 },
           

          );

          gsap.fromTo(
            ".taskupheading",
            { x: 0, duration: 1.5, ease: "elastic", scale: 0.5 , opacity:0 },
            { x: 0, duration: 1, ease: "slow", scale: 1 , opacity:1},
           
          );

          let tl = gsap.timeline();
          let tl2 = gsap.timeline();

          tl.fromTo(".star1" ,  {  duration: 1, ease: "slow", scale: 0.5 , opacity:0 },
          {  duration: 1, ease: "smooth", scale: 1 , opacity:1 })
        .fromTo(".star2" ,{  duration: 1, ease: "slow", scale: 0.5 , opacity:0 },
        {  duration: 1, ease: "smooth", scale: 1 , opacity:1 } ) .fromTo(".star3" ,{  duration: 1, ease: "slow", scale: 0.5 , opacity:0 },
        {  duration: 1, ease: "smooth", scale: 1 , opacity:1 } );


        tl2.fromTo(".point1" ,  {  x: -100  , duration: 1, ease: "slow", scale: 0.5 , opacity:0 },
        { x:0 , duration: 1, ease: "smooth", scale: 1 , opacity:1 })
      .fromTo(".point2" ,{ x:-200 ,  duration: 1, ease: "slow", scale: 0.5 , opacity:0 },
      { x:0 ,  duration: 1, ease: "smooth", scale: 1 , opacity:1 } ) .fromTo(".point3" ,{ x:-300 ,  duration: 1, ease: "slow", scale: 0.5 , opacity:0 },
      {  x:0 , duration: 1, ease: "smooth", scale: 1 , opacity:1 } ).fromTo(".point4" ,{ x:-400 ,   duration: 1, ease: "slow", scale: 0.5 , opacity:0 },
      {  x:0 ,duration: 1, ease: "smooth", scale: 1 , opacity:1 } );



     }   , []);


  return (
    <div style={{ margin: '0 4vw', height: '89vh', backgroundColor: '#edf8fe', display: 'flex', flexDirection: 'column', alignItems: 'center' , borderRadius:'20px' }}>

      {/* First Div */}
      <div style={{ marginBottom: '20px', marginTop: '50px' , textAlign:'center' }}>
        <p className='taskupheading' style={{ fontSize: '28px', marginBottom: '30px' , fontFamily: 'sans-serif'  , fontWeight:'bold'}}>Let your friends, family, and co-workers (anonymously) rate your social skills</p>
        <p  className='taskdownheading' style={{ fontSize: '48px', marginBottom: '10px'  , fontFamily: 'sans-serif' , fontWeight:'bold'}}>Ever wondered what others think of you?</p>
      </div>

      {/* Second Div */}
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
        {/* Star Div 1 */}
        <div style={{ textAlign: 'center', marginRight: '20px' , width:'75%' }}>
          <div style={{ width: '50px', height: '50px',  borderRadius: '50%', display: 'inline-block', position: 'relative' }}>
            <div className='star1' style={{ position: 'absolute', top: '50%', left: '50%', fontSize:"40px", transform: 'translate(-50%, -50%)' }}>⭐</div>
          </div>
          <p className='star1' style={{ fontSize: '15px',  fontFamily: 'sans-serif' , marginTop: '5px'  }}>Answer questions on your skill</p>
        </div>

        {/* Dotted Line */}
        {/* <div style={{ flex: 1, border: '1px dotted black', margin: '0 10px' }}></div> */}

        {/* Star Div 2 */}
        <div style={{ textAlign: 'center', marginRight: '20px' , width:'75%' }}>
          <div style={{ width: '50px', height: '50px',  borderRadius: '50%', display: 'inline-block', position: 'relative' }}>
            <div className='star2' style={{ position: 'absolute', top: '50%', left: '50%', fontSize:"40px", transform: 'translate(-50%, -50%)' }}>⭐</div>
          </div>
          <p  className='star2'  style={{ fontSize: '15px' , fontFamily: 'sans-serif' ,marginTop: '5px' }}>Answer questions on your skill</p>
        </div>

        <div style={{ textAlign: 'center', marginRight: '20px' , width:'75%' }}>
          <div style={{ width: '50px', height: '50px',  borderRadius: '50%', display: 'inline-block', position: 'relative' }}>
            <div className='star3' style={{ position: 'absolute', top: '50%', left: '50%', fontSize:"40px", transform: 'translate(-50%, -50%)' }}>⭐</div>
          </div>
          <p className='star3' style={{ fontSize: '15px'  , fontFamily: 'sans-serif', marginTop: '5px' }}>Answer questions on your skill</p>
        </div>
      </div>

      

      
      {/* Third Div */}
      <div style={{ textAlign: 'center', width: '100%', marginTop: '20px' , display:'flex' , justifyContent:'center' , alignItems:'center' , height:'40%' }}>
        {/* Points */}
      

        {/* White Div */}
        <div style={{ width: '60%', height: '70%', backgroundColor: 'white', borderRadius: '10px', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
            <div className='point1' style={{ width: '20px', height: '20px', background: 'red', borderRadius: '50%', display: 'inline-block' }}></div>
            <div className="point2" style={{ width: '20px', height: '20px', background: 'yellow', borderRadius: '50%', display: 'inline-block' }}></div>
            <div className="point3" style={{ width: '20px', height: '20px', background: 'green', borderRadius: '50%', display: 'inline-block' }}></div>
            <div className="point4" style={{ width: '20px', height: '20px', background: 'blue', borderRadius: '50%', display: 'inline-block' }}></div>
          </div>
          
        </div>
      </div>

    </div>
  );
}
