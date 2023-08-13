import { useEffect, useState } from "react";
import RoboBarista from "./RoboBarista";
import SmartCards from "./SmartCards";
import GidroGel from "./GidroGel";
import AboutUs from "./AboutUs";
import Vector from "./vector";
import NFC from "./NFC";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import "./App.css";
import MotionWebLLS from "./MotionWebLLS";
import RoboCarWash from "./RoboCarWash";
import Contacts from "./Contacts";
import { Box } from "@chakra-ui/react";
import { Link} from "react-router-dom";

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
<AnimatePresence>
  {state === 1 && (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{
        y: '0%',
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' }, 
      }}
      exit={{
        y: '100%',
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      className="nfc"
      style={{
        position: 'fixed',
        top: '38%',
        left: '40%',
        right:"43%",
        transform: 'translate(-50%, -50%)',
      }}
    >
      <NFC />
    </motion.div>
  )}
</AnimatePresence>

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
     
  
        <Box display={{md:"none", base:"block"}}>
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
        </Box>

        <div className="odd">
        {countArray.map((el, index) => (
               <div className="vector">
              { index === 5 && state === 2 ? (
                <motion.div
                initial={{ scale: 0 }} // начальный масштаб блока
                animate={{ scale: 1 }} // конечный масштаб блока
                transition={{ duration: 1, ease: "anticipate" }} // начальный масштаб блока
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                style={{cursor : "pointer"}}
                >
                  <Link to={'/about'}>
                   <AboutUs media={media} />
                  </Link>
                 
                </motion.div>
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
              { index === 4 && state === 2 ? (
                <motion.div
                initial={{ scale: 0 }} // начальный масштаб блока
                animate={{ scale: 1 }} // конечный масштаб блока
                transition={{ duration: 1, ease: "anticipate" }} // начальный масштаб блока
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                style={{cursor : "pointer"}}
                >
                  <RoboBarista media={media} />
                </motion.div>
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
                <motion.div
                initial={{ scale: 0 }} // начальный масштаб блока
                animate={{ scale: 1 }} // конечный масштаб блока
                transition={{ duration: 1, ease: "anticipate" }} // начальный масштаб блока
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                style={{cursor : "pointer"}}
                >
                  <SmartCards media={media} />
                </motion.div>
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
                <motion.div
                initial={{ scale: 0 }} // начальный масштаб блока
                animate={{ scale: 1 }} // конечный масштаб блока
                transition={{ duration: 1, ease: "anticipate" }} // начальный масштаб блока
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                style={{cursor : "pointer"}}
                >
                  <GidroGel media={media} />
                </motion.div>
              ) :  (
                <Vector media={media} />
              )}
            </div>
          ))}
        </div>

     
        <div className="even">
          {countArray.map((el, index) => (
            <div className="vector">
              {index === 4 && state === 2 ? (
                <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }} 
                transition={{ duration: 1, ease: "anticipate" }} 
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                style={{cursor : "pointer"}}
                >
                  <RoboCarWash media={media} />
                </motion.div>
              ) : (
                <Vector media={media} />
              )}
            </div>
          ))}
        </div>
        <div className="odd">
          {countArray.map((el, index) => (
            <div className="vector">
              { index === 4 && state === 2 ? (
                <motion.div
                initial={{ scale: 0 }} // начальный масштаб блока
                animate={{ scale: 1 }} // конечный масштаб блока
                transition={{ duration: 1, ease: "anticipate" }} // начальный масштаб блока
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                style={{cursor : "pointer"}}
                >
                  <MotionWebLLS media={media} />
                </motion.div>
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
              {index === 5 && state === 2 ? (
                <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }} 
                transition={{ duration: 1, ease: "anticipate" }} 
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                style={{cursor : "pointer"}}
                >
                  <Link to={'/contacts'}>
                   <Contacts media={media} />
                  </Link>
                 
                </motion.div>
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
  
      </div>
    </div>
  );
}

export default App;
