import { useEffect, useState } from "react";
import AboutUs from "./AboutUs";
import "./App.css";
import GidroGel from "./GidroGel";
import RoboBarista from "./RoboBarista";
import Slot from "./Slot";
import SmartCards from "./SmartCards";
import Vector from "./vector";
import NFC from "./NFC";

function App() {
  const [state, setState] = useState(0);
  const count = 10;
  const countArray = Array.from({ length: count }, (_, index) => index + 1);

  useEffect(() => {
    setTimeout(() => {
      setState(1);
    }, 1000);
    setTimeout(() => {
      setState(2);
    }, 5000);
  }, []);
  console.log(state);
  return (
    <div id={"vector"}>
      <div
        style={{
          position: "absolute",
          top: state === 0 && state === 2 ? "60%" : "50%",
          left: "40%",
          right: "45%",
          bottom: "50%",
          display: state === 1 ? "block" : "none",
          transition: "1s",
        }}
      >
        <NFC />
      </div>
      <div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
        <div className="even">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
        <div className="odd" style={{ marginTop: "-76px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
        <div className="even" style={{ marginTop: "-80px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
        <div className="odd" style={{ marginTop: "-76px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 5 && state === 2 ? (
                <div style={{ cursor: "pointer" }}>
                  <AboutUs />
                </div>
              ) : (
                <Vector />
              )}
            </div>
          ))}
        </div>
        <div className="even" style={{ marginTop: "-80px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
        <div className="odd" style={{ marginTop: "-76px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 4 && state === 2 ? (
                <div style={{ cursor: "pointer" }}>
                  <SmartCards />
                </div>
              ) : (
                <Vector />
              )}
            </div>
          ))}
        </div>
        <div className="even" style={{ marginTop: "-80px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 4 && state === 2 ? (
                <div style={{ cursor: "pointer" }}>
                  <RoboBarista />
                </div>
              ) : (
                <Vector />
              )}
            </div>
          ))}
        </div>
        <div className="odd" style={{ marginTop: "-76px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 5 && state === 2 ? (
                <div style={{ cursor: "pointer" }}>
                  <GidroGel />
                </div>
              ) : index === 4 && state === 2 ? (
                <div style={{ cursor: "pointer" }}>
                  <Slot />
                </div>
              ) : (
                <Vector />
              )}
            </div>
          ))}
        </div>
        <div className="even" style={{ marginTop: "-80px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 4 && state === 2 ? (
                <div style={{ cursor: "pointer" }}>
                  <Slot />
                </div>
              ) : (
                <Vector />
              )}
            </div>
          ))}
        </div>
        <div className="odd" style={{ marginTop: "-76px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 4 && state === 2 ? (
                <div style={{ cursor: "pointer" }}>
                  <Slot />
                </div>
              ) : (
                <Vector />
              )}
            </div>
          ))}
        </div>
        <div className="even" style={{ marginTop: "-80px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
        <div className="odd" style={{ marginTop: "-76px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
        <div className="even" style={{ marginTop: "-80px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
        <div className="odd" style={{ marginTop: "-76px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
        <div className="even" style={{ marginTop: "-80px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
        <div className="odd" style={{ marginTop: "-76px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
        <div className="even" style={{ marginTop: "-80px" }}>
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
