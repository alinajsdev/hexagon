import { useEffect, useState } from "react";
import RoboBarista from "./assets/RoboBarista";
import SmartCards from "./assets/SmartCards";
import GidroGel from "./assets/GidroGel";
import AboutUs from "./assets/AboutUs";
import NFC from "./assets/NFC";
import { motion, AnimatePresence } from "framer-motion";
import MotionWebLLS from "./assets/MotionWebLLS";
import RoboCarWash from "./assets/RoboCarWash";
import Contacts from "./assets/Contacts";
import { Box } from "@chakra-ui/react";
import VectorUI from "./UI/Vector";
import Sots from "./UI/Sots";
import "./App.css";
function App() {
  const [state, setState] = useState(0);
  const [media, setMedia] = useState(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id={"vector"}>
      <AnimatePresence>
        {state === 1 && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: "0%",
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            exit={{
              y: "100%",
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            className="nfc"
         
          >
            <NFC />
            <Box></Box>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <VectorUI media={media} className={"odd"} />
        <VectorUI media={media} className={"even"} />

        <Box display={{ md: "none", base: "block" }}>
          <VectorUI media={media} className={"odd"} />
          <VectorUI media={media} className={"even"} />
        </Box>

        <Sots
          className={"odd"}
          idx={6}
          sot={<AboutUs media={media} />}
          media={media}
          state={state}
        />

        <VectorUI media={media} className={"even"} />
        <Sots
          className={"odd"}
          idx={5}
          sot={<RoboBarista media={media} />}
          media={media}
          state={state}
          link={""}
        />
        <Sots
          className={"even"}
          idx={5}
          sot={<SmartCards media={media} />}
          media={media}
          state={state}
          link={""}
        />
        <Sots
          className={"odd"}
          idx={6}
          sot={<GidroGel media={media} />}
          media={media}
          state={state}
          link={""}
        />

        <Sots
          className={"even"}
          idx={5}
          sot={<RoboCarWash media={media} />}
          media={media}
          state={state}
          link={""}
        />
        <Sots
          className={"odd"}
          idx={5}
          sot={<MotionWebLLS media={media} />}
          media={media}
          state={state}
          link={""}
        />
        <VectorUI media={media} className={"even"} />
        <Sots
          className={"odd"}
          idx={6}
          sot={<Contacts media={media} />}
          media={media}
          state={state}
          link={""}
        />
        <VectorUI media={media} className={"even"} />
        <VectorUI media={media} className={"odd"} />
        <VectorUI media={media} className={"even"} />
        <VectorUI media={media} className={"odd"} />
        <VectorUI media={media} className={"even"} />
      </div>
    </div>
  );
}

export default App;
