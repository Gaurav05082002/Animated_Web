import React, { useEffect } from "react";
import ava from "../public/avatar.png";
import mani from "../public/mani.jpg";
import leaf from "../public/leaf.jpg";
import flower from "../public/flowe1.jpg";
import ring from "../public/ring.jpg";
import gsap from "gsap";
export default function Manifesto() {
  useEffect(() => {
    gsap.fromTo(
      ".manidownheading",
      { x: -100, duration: 1.5, ease: "elastic", scale: 0.5 },
      { x: 0, duration: 1, ease: "slow", scale: 1 }
    );
    gsap.fromTo(
      ".maniupheading",
      { x: -100, duration: 1.5, ease: "elastic", scale: 0.5 },
      { x: 0, duration: 1, ease: "slow", scale: 1 }
    );

    let tl = gsap.timeline();
    tl.fromTo(
      ".mani",
      { y: 150, duration: 1, ease: "slow", scale: 0.5 },
      { y: 0, duration: 2, ease: "smooth", scale: 1 }
    ).fromTo(
      ".mani",
      { duration: 1, rotation: 0, ease: "smooth" },
      { duration: 3, rotation: 360, ease: "elastic" }
    );

    gsap.fromTo(
      ".rotate",
      { duration: 1, rotation: 0, repeat: 0, ease: "smooth" },
      { duration: 3, rotation: 360, repeat: -1, ease: "smooth" }
    );

    gsap.fromTo(
      ".moveleaf",
      {
        duration: 5,
        x: "random(-50, 10, 5)",
        y: "random(-10,50, 5)",
        repeat: 1,
        ease: "elastic", //chooses a random number between -100 and 100 for each target, rounding to the closest 5!
      },
      {
        duration: 5,
        x: "random(-40, 10, 5)",
        y: "random(-10, 10, 5)",
        repeat: -1,
        ease: "elastic", //chooses a random number between -100 and 100 for each target, rounding to the closest 5!
      }
    );

    gsap.fromTo(  ".para",    {opacity:0 , duration:1 , ease:'slow' , scale:0.5} , {opacity:1 , duration:1 , ease:'slow' , scale:1} );
  }, []);

  return (
    <div
      style={{
        margin: "0 4vw",
        height: "89vh",
        backgroundColor: "#fff4f4",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Upper Div */}
      <div
        style={{
          height: "20%",
          position: "relative",
          display: "flex",
          paddingTop: "10px",
          paddingLeft: "50px",
        }}
      >
        {/* Image on the right */}
        <img
          src={ring.src}
          className="rotate"
          alt="Ring"
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
            padding: "5px",
            paddingRight: "50px",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src={ring.src}
            className="rotate"
            alt="Ring"
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />
        </div>

        {/* Leaf image a little lower */}
        <img
          src={leaf.src}
          className="rotate"
          alt="Leaf"
          style={{
            marginBottom: "5px",
            width: 80,
            height: 40,
            position: "absolute",
            right: 0,
            bottom: 0,
            zIndex: 2,
          }}
        />

        {/* Small div on the upper border */}
      </div>

      {/* Second Div */}
      <div
        style={{
          height: "20%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4 style={{ margin: 0 }} className="maniupheading">
          Built out of frustation
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: "400px",
          }}
          className="manidownheading"
        >
          {" "}
          <h1 style={{ marginTop: "10px", fontSize: "54px" }}>
            Meet ahead app
          </h1>{" "}
          <img
            className="rotate"
            src={ring.src}
            alt="Ring"
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />
        </div>
      </div>

      {/* Third Div */}
      <div style={{ height: "60%", display: "flex" }}>
        {/* Left Bottom Div */}
        <div style={{ flex: "0 0 50%", display: "flex", flexDirection: "row" }}>
          {/* 75% width div */}
          <div
            style={{
              flex: "0 0 75%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Image at exact center */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: "40%",
                height: "50%",
                border: "solid 10px #EFEAFE",
              }}
            >
              <img
                src={mani.src}
                className="mani"
                alt="Image"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  height: "25%",
                  width: "15%",
                }}
              />
            </div>
          </div>

          {/* 25% width div */}
          <div
            style={{
              flex: "0 0 25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {/* Three images in column */}
            <img
              src={ring.src}
              className="moveleaf"
              alt="Image1"
              style={{
                marginBottom: "5px",
                width: 50,
                height: 50,
                borderRadius: "50%",
              }}
            />
            <img
              src={leaf.src}
              className="moveleaf"
              alt="Image2"
              style={{ marginBottom: "5px", width: 100, height: 50 }}
            />
            <img
              src={flower.src}
              className="moveleaf"
              alt="Image3"
              style={{
                marginBottom: "5px",
                width: 50,
                height: 50,
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        {/* Right Bottom Div */}
        <div
          style={{
            flex: "0 0 50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            paddingTop: "10px",
          }}
        >
          <p
            style={{
              fontSize: "17px",
              textAlign: "left",
              paddingRight: "40px",
              width: "60%",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
            className="para"
          >
            A personalized pocket coach that provides bite-sized, science-driven
            tools to boost emotional intelligence.
          </p>
          <p
            style={{
              fontSize: "17px",
              textAlign: "left",
              paddingRight: "40px",
              width: "60%",
              fontWeight: "bold",
              marginTop: "10px",
            }}
            className="para"
          >
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </p>
        </div>
      </div>
    </div>
  );
}
