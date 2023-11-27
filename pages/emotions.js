import React from "react";
import { useEffect } from "react";
// import img from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap";
import { ScrollSmoother } from "gsap";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);
import MobCard from "../public/mobcard.png";

import logo from "../public/logo.png";
import MobScr from "../public/mobscreen.png";
import Flower1 from "../public/flowe1.jpg";
import Ava from "../public/avatar.png";

const emotions = () => {


  gsap.registerPlugin(ScrollTrigger);
  function onEnterViewport() {
    this.setState({
      visible: true,
    });
  }

  function onExitViewport() {
    this.setState({
      visible: false,
    });
  }

 

  useEffect(() => {
    

    





    gsap.to(".leftBigHeading", {
      scrollTrigger: ".leftBigHeading",
      x: 10000,
    });

    gsap.from(".leftBigHeading", {
      drawSVG: "0%",
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".leftBigHeading",
        start: "clamp(top center)",
        scrub: true,
        pin: ".pin",
        pinSpacing: false,
        markers: true,
      },
    });

   
  
  // console.log("heyeye" , st.animation); // tween

    gsap.fromTo(
      ".leftBigHeading",
      { x: -500, duration: 1, ease: "elastic", scale: 0.5  },
      { x: 0, duration: 1, ease: "slow", scale: 1  }
    );

    gsap.fromTo(
      ".smallCircle0",
      {
        duration: 2,
        rotation: 0,
        transformOrigin: "-200px +10px",
        opacity: 0.2,
        scale: 0.1,
      },
      {
        duration: 1,
        rotation: 360,
        transformOrigin: "-200px +10px",
        opacity: 1,
        scale: 1,
        ease: "fast",
      }
    );
    gsap.fromTo(
      ".smallCircle1",
      {
        duration: 2,
        rotation: 0,
        transformOrigin: "120px -215px",
        opacity: 0.2,
        scale: 0.1,
      },
      {
        duration: 1,
        rotation: 360,
        transformOrigin: "120px -215px",
        opacity: 1,
        scale: 1,
        ease: "fast",
      }
    );
    gsap.fromTo(
      ".smallCircle2",
      {
        duration: 2,
        rotation: 0,
        transformOrigin: "110px +230px",
        opacity: 0.2,
        scale: 0.1,
      },
      {
        duration: 1,
        rotation: 360,
        transformOrigin: "110px +230px",
        opacity: 1,
        scale: 1,
        ease: "fast",
      }
    );
    let tl = gsap.timeline();
    tl.fromTo(
      ".mobscreen",
      { duration: 0.5, opacity: 0.2, scale: 0.5 },
      { duration: 0.5, opacity: 1, scale: 1, ease: "fast" }
    ).fromTo(
      ".mobcard",
      { duration: 0.5, opacity: 0, scale: 0.5, x: 100 },
      { duration: 0.5, opacity: 1, scale: 1, ease: "fast", x: 0 }
    );
    gsap.fromTo(
      ".flower",
      {
        duration: 3,
        x: "random(-50, 10, 5)",
        y: "random(-10,50, 5)",

        ease: "smooth",
      },
      {
        duration: 3,
        x: "random(-40, 10, 5)",
        y: "random(-10, 10, 5)",

        ease: "smooth",
      }
    );
  }, []);

  const calculatePosition = (index, totalCircles) => {
    const angle = (index / totalCircles) * 2 * Math.PI;
    const radius = "50%";
    const x = `calc(50% + ${radius} * ${Math.cos(angle)})`;
    const y = `calc(50% + ${radius} * ${Math.sin(angle)})`;
    return { top: y, left: x, transform: "translate(-50%, -50%)" };
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
          padding: "20px",
          borderRadius: "20px 0 0 20px",
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
            {/* star icons -gaurav */}
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
          width: "60%",
          height: "87vh",
          backgroundColor: "#EFEAFE",
          position: "relative",
          // border: 'solid 2px violet',
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Left Column */}
        <div
          style={{
            width: "20%",
            // border: 'solid 2px red',
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: "30px",
          }}
        >
          <div
            style={{
              height: "50%",
              marginBottom: "10%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className="flower"
          >
            <img src={Flower1.src} alt="Circle img" width={50} height={50} />
          </div>
          <div
            style={{
              height: "50%",
              marginTop: "10%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className="flower"
          >
            <img src={Flower1.src} alt="Circle img" width={50} height={50} />
          </div>
        </div>

        {/* Center Circle */}
        <div
          style={{
            width: "100%",
            height: "87vh",
            backgroundColor: "#EFEAFE",
            position: "relative",
          }}
        >
          {/* Center Circle */}
          <div
            className="centerCircle"
            style={{
              width: "90%",
              height: "80%",
              borderRadius: "50%",
              border: "5px dotted white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              // overflow: 'hidden',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Rectangle Image */}
            <img
              src={MobCard.src}
              alt="Rectangle Image"
              style={{ width: "25%", height: "30%", zIndex: "10002" }}
              className="mobcard"
            />

            <img
              src={MobScr.src}
              alt="Rectangle Image"
              style={{ width: "35%", height: "70%" }}
              className="mobscreen"
            />

            {/* Small Circles on the Boundary */}
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`smallCircle${index}`}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "white",
                  border: "1px dotted red",
                  position: "absolute",
                  ...calculatePosition(index, 3),
                  zIndex: "1001 !important",
                }}
              >
                {/* Small Images inside Small Circles */}
                <img
                  src={Ava.src} // Replace with the actual image URL
                  alt={`Small Image ${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    zIndex: 1001,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div
          style={{
            width: "20%",
            // border: 'solid 2px red',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "100%",
            padding: "30px",
          }}
        >
          <div
            style={{ height: "50%", marginBottom: "10%" }}
            className="flower"
          >
            <img src={Flower1.src} alt="Circle img" width={50} height={50} />
          </div>
          <div style={{ height: "50%", marginTop: "10%" }} className="flower">
            <img src={Flower1.src} alt="Circle img" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default emotions;
