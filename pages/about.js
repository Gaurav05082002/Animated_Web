import React, { useEffect } from "react";
import Sign from "../public/sign.jpg";
import gsap from "gsap";
const about = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".textup1",
      { y: 100, duration: 1, ease: "elastic", scale: 0.5, opacity: 0 },
      { y: 0, duration: 1, ease: "slow", scale: 1, opacity: 1 }
    )
      .fromTo(
        ".textup2",
        { y: 100, duration: 0.5, ease: "elastic", scale: 0.5, opacity: 0 },
        { y: 0, duration: 0.5, ease: "slow", scale: 1, opacity: 1 }
      )
      .fromTo(
        ".textup3",
        { y: 10, duration: 0.5, ease: "elastic", scale: 0.5, opacity: 0 },
        { y: 0, duration: 0.5, ease: "slow", scale: 1, opacity: 1 }
      ).fromTo(
        ".textup4",
        { y: 10, duration: 0.5, ease: "elastic", scale: 0.5, opacity: 0 },
        { y: 0, duration: 0.5, ease: "slow", scale: 1, opacity: 1 }
      )
      .fromTo(
        ".signature",
        { scale: 0.5, opacity: 0 },
        { opacity: 1, duration: 1, ease: "slow", scale: 1 }
      );


  }, []);

  return (
    <div
      style={{
        margin: "0 4vw",
        height: "86vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        borderRadius: "20px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <p
          style={{
            fontFamily: "bold",
            fontFamily: "sans-serif",
            color: "black",
          }}
          className="textup1"
        >
          We take privacy seriously
        </p>
      </div>
      <div style={{ marginBottom: "20px" }} className="textup2">
        <h1>Before you get started</h1>
      </div>
      <div
        style={{ marginBottom: "20px", textAlign: "center" }}
        className="textup3"
      >
        <p>
          "We won't share your answers with anyone (and won't ever tell you
          which friends said what about you)"
        </p>
      </div>
      <div
        style={{ marginBottom: "20px", display: "flex", flexDirection: "row" }}
      >
        {" "}
        <div className="textup4">with love</div>  
        <img
          className="signature"
          src={Sign.src}
          style={{ width: 100, height: 20 }}
        ></img>{" "}
      </div>
      <div>
        <button
          style={{
            borderRadius: "8px",
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            fontSize: "14px",
          }}
        >
          Start a Test
        </button>
      </div>
    </div>
  );
};

export default about;
