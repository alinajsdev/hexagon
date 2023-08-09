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
  const [media, setMedia] = useState(false);
  const count = 10;
  const countArray = Array.from({ length: count }, (_, index) => index + 1);

  useEffect(() => {
    setTimeout(() => {
      setState(1);
    }, 1000);
    setTimeout(() => {
      setState(2);
    }, 5000);

    if (window.innerWidth < 600) {
      return setMedia(!media);
    }
  }, []);

  return (
    <div id={"vector"}>
      <div
        className="nfc"
        style={{
          top: state === 0 && state === 2 ? "60%" : "50%",
          display: state === 1 ? "block" : "none",
        }}
      >
        <NFC />
      </div>
      <div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="even">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="even">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 5 && state === 2 ? (
                <div>
                  <AboutUs media={media} />
                </div>
              ) : (
                <Vector media={media} />
              )}
            </div>
          ))}
        </div>
        <div className="even">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 4 && state === 2 ? (
                <div>
                  <SmartCards media={media} />
                </div>
              ) : (
                <Vector media={media} />
              )}
            </div>
          ))}
        </div>
        <div className="even">
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 4 && state === 2 ? (
                <div>
                  <RoboBarista media={media} />
                </div>
              ) : (
                <Vector media={media} />
              )}
            </div>
          ))}
        </div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 5 && state === 2 ? (
                <div>
                  <GidroGel media={media} />
                </div>
              ) : index === 4 && state === 2 ? (
                <div>
                  <Slot media={media} />
                </div>
              ) : (
                <Vector media={media} />
              )}
            </div>
          ))}
        </div>
        <div className="even">
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 4 && state === 2 ? (
                <div>
                  <Slot media={media} />
                </div>
              ) : (
                <Vector media={media} />
              )}
            </div>
          ))}
        </div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 4 && state === 2 ? (
                <div style={{ cursor: "pointer" }}>
                  <Slot media={media} />
                </div>
              ) : (
                <Vector media={media} />
              )}
            </div>
          ))}
        </div>
        <div className="even">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="even">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="even">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="even">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
