import { useEffect, useState } from "react";
import RoboBarista from "./assets/RoboBarista";
import SmartCards from "./assets/SmartCards";
import GidroGel from "./assets/GidroGel";
import AboutUs from "./assets/AboutUs";
import NFC from "./assets/NFC";
import MotionWebLLS from "./assets/MotionWebLLS";
import RoboCarWash from "./assets/RoboCarWash";

import { Box, useDisclosure } from "@chakra-ui/react";
import VectorUI from "./UI/Vector";
import Sots from "./UI/Sots";
import "./App.css";
import About from "./components/About";
import ContactsModal from "./components/Contacts";

function App() {
  const [state, setState] = useState(0);
  const [media, setMedia] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  useEffect(() => {
    setTimeout(() => {
      setState(1);
    }, 1000);
    setTimeout(() => {
      setState(2);
    }, 3000);

    if (window.innerWidth < 600) {
      return setMedia(!media);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id={"vector"}>
      {state === 1 && (
        <Box
          className=" main-animation"
          position="fixed"
          top="0"
          left="0"
          w="100%"
          h="100vh"
          zIndex="100"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="main-animation__text">
            <NFC />
          </Box>
        </Box>
      )}

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
          sot={
            <Box onClick={onToggle}>
              <AboutUs media={media} />
            </Box>
          }
          media={media}
          state={state}
        />

        <About onToggle={onToggle} isOpen={isOpen} />

        <VectorUI media={media} className={"even"} />
        <Sots
          className={"odd"}
          idx={5}
          sot={<RoboBarista media={media} />}
          media={media}
          state={state}
          link={
            "https://www.figma.com/proto/WJZQpGaD5B9mSU5OkQeEnh/COFFEE-ROBOT?page-id=0%3A1&type=design&node-id=50-37&t=WSxJfjMt2QBJSpcd-0&scaling=contain"
          }
        />
        <Sots
          className={"even"}
          idx={5}
          sot={<SmartCards media={media} />}
          media={media}
          state={state}
          link={"https://nfc-gcc.com/nfc_comporessed.pdf"}
        />
        <Sots
          className={"odd"}
          idx={6}
          sot={<GidroGel media={media} />}
          media={media}
          state={state}
          link={
            " https://www.figma.com/proto/rNPbdmrIfQf22zlB50XviN/Untitled?page-id=0%3A1&type=design&node-id=17-2&t=VfFGvsllO8e5I56y-0&scaling=min-zoom"
          }
        />

        <Sots
          className={"even"}
          idx={5}
          sot={<RoboCarWash media={media} />}
          media={media}
          state={state}
          link={"https://robo-car-wash.com"}
        />
        <Sots
          className={"odd"}
          idx={5}
          sot={<MotionWebLLS media={media} />}
          media={media}
          state={state}
          link={"https://motionweb.dev"}
        />
        <VectorUI media={media} className={"even"} />
        <ContactsModal media={media} state={state} />

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
