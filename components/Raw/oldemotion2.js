import React from "react";
import { useEffect } from "react";
// import img from 'next/image';
import gsap from "gsap";
// import mobcard from '../public/assets/images/mobcard.JPG';
// import MobScr from '../public/mobscreen.png';
import MobCard from "../public/mobcard.png";
// import Ava from 'https://via.placeholder.com/300';
import logo from "../public/logo.png";
import MobScr from "./mobscreen.png";
import duolingo1 from "../public/duolingo1.png";

const emotions = () => {
  
  useEffect(() => {
    // Make sure you have an element with the class "leftDiv" in your JSX
    // let tween = gsap.to('.leftDiv', { rotation: 360, duration: 5, ease: 'elastic' });
    //  let  x = gsap.from(".leftBigHeading", {rotation: 0, x: -1100, duration: 1});
    gsap.fromTo(
      ".leftBigHeading",
      { x: -500, duration: 1, ease: "elastic", scale: 0.5 },
      { x: 0, duration: 1, ease: "slow", scale: 1 }
    );
    gsap.fromTo(
      ".stardiv",
      { opacity: 0, scale: 0 },
      { opacity: 1, duration: 1, scale: 1, ease: "slow" }
    );
    // Now you can control it!
    // tween.pause();
    // tween.seek(2);
    // tween.progress(0.5);
    // x.play();
  }, []);

  const calculatePosition = (index, totalCircles) => {
    const angle = (index / totalCircles) * 2 * Math.PI;
    const radius = '50%'; // Adjust this for the desired radius
    const x = `calc(50% + ${radius} * ${Math.cos(angle)})`;
    const y = `calc(50% + ${radius} * ${Math.sin(angle)})`;
    return { top: y, left: x, transform: 'translate(-50%, -50%)' };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "0 4vw",
        height: "89vh",

        backgroundColor: "white",
      }}
    >
      {/* Left Div */}
      <div
        style={{
          width: "40%",
          height: "87vh",
          display: "flex",
          flexDirection: "column",
          // alignItems: 'center',
          padding: "20px",
          borderRadius: "20px 0 0 20px", // Values for top-left, top-right, bottom-right, bottom-left corners
          backgroundColor: "#EFEAFE",
          justifyContent: "center",
        }}
        class="leftDiv"
      >
        <div
          class="leftBigHeading"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "0px",
            margin: "0px 10px",
            textAlign: "left",
            color: "grey",
          }}
        >
          Ahead app
        </div>
        <div
          style={{
            fontSize: "62px",
            fontWeight: "bold",
            textAlign: "left",
            margin: "0px 10px",
            // border:'solid  2px red'
          }}
          class="leftBigHeading"
        >
          Master your life by mastering emotions
        </div>
        <diV
          style={{
            display: "flex",
            flexDirection: "row",
            margin: " 10px",
            marginTop: "30px",
          }}
        >
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Download
          </button>
          <div
            style={{
              display: "flex",
              marginLeft: "10px",
              flexDirection: "column",
            }}
            class="stardiv"
          >
            {/* Add your star icons here */}
            <diV>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} style={{ margin: "0 0px" }}>
                  ⭐
                </span>
              ))}
            </diV>
            <p style={{ fontSize: "12px", fontWeight: "bold" }}>
              100+ AppStore reviews
            </p>
          </div>
        </diV>
      </div>

      {/* Right Div */}

      <div
      style={{
        width: '60%',
        height: '87vh',
        backgroundColor: '#EFEAFE',
        position: 'relative',
        border: 'solid 2px violet',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Left Column */}
      <div
        style={{
          width: '20%',
          border: 'solid 2px red',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '30px',
        }}
      >
        <div style={{ height: '50%', marginBottom: '10%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpZI3UiRXti_C5SQ0zZZaOLbuzLzqY1Nt9WCFnrdhTxnPFwbGQpQBdJIM4QoUyAMWuHA&usqp=CAU"
            alt="Circle img"
            width={50}
            height={25}
          />
        </div>
        <div style={{ height: '50%', marginTop: '10%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpZI3UiRXti_C5SQ0zZZaOLbuzLzqY1Nt9WCFnrdhTxnPFwbGQpQBdJIM4QoUyAMWuHA&usqp=CAU"
            alt="Circle img"
            width={50}
            height={25}
          />
        </div>
      </div>

      {/* Center Circle */}
      <div
        style={{
          width: '60%',
          height: '80%',
          borderRadius: '50%',
          border: '7px dotted white',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          overflow: 'hidden',
      
        }}
      >
        {/* Rectangle img */}
        <img
          src="https://media.istockphoto.com/id/1372270592/vector/mobile-phone-notifications.jpg?s=1024x1024&w=is&k=20&c=uS39bIN2tqphjXBUW4dbdLND7q9fFxQqK6X_GWrlPYI="
          alt="Rectangle img"
          layout="fill"
          objectFit="cover"
        />

        {/* Small Circles on the Boundary */}
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '25px',
              borderRadius: '50%',
              background: 'white',
              border: '10px dotted red',
              position: 'absolute',
              zIndex: '10001',
              ...calculatePosition(index, 3), // Pass the total number of circles
            }}
          >
            {/* Small Images inside Small Circles */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpZI3UiRXti_C5SQ0zZZaOLbuzLzqY1Nt9WCFnrdhTxnPFwbGQpQBdJIM4QoUyAMWuHA&usqp=CAU"
              alt={`Small img ${index}`}
              width={50}
              height={25}
              objectFit="cover"
              style={{ borderRadius: '50%', position: 'relative', zIndex: '1001', border: 'solid 2px red' }}

            />
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div
        style={{
          width: '20%',
          border: 'solid 2px red',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '100%',
          padding: '30px',
        }}
      >
        <div style={{ height: '50%', marginBottom: '10%' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpZI3UiRXti_C5SQ0zZZaOLbuzLzqY1Nt9WCFnrdhTxnPFwbGQpQBdJIM4QoUyAMWuHA&usqp=CAU"
            alt="Circle img"
            width={50}
            height={25}
          />
        </div>
        <div style={{ height: '50%', marginTop: '10%' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpZI3UiRXti_C5SQ0zZZaOLbuzLzqY1Nt9WCFnrdhTxnPFwbGQpQBdJIM4QoUyAMWuHA&usqp=CAU"
            alt="Circle img"
            width={50}
            height={25}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default emotions;
