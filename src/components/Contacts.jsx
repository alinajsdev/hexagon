import { Box, Heading, Slide, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sots from "../UI/Sots";
import Contacts from "../assets/Contacts";
import Exit from "../assets/Exit";
import Phone from "../assets/Phone";
import Watsapp from "../assets/Watsapp";
import Email from "../assets/Email";
import Telegram from "../assets/Telegram";

const ContactsModal = ({ media, state }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Sots
        className={"odd"}
        idx={6}
        sot={
          <Box onClick={() => onToggle()}>
            <Contacts media={media} />
          </Box>
        }
        media={media}
        state={state}
        link={""}
      />
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
                pos={"relative"}
                maxW={{ lg: "600px",md:"100%", base: "98%" }}
                ml={{ lg: "30%", sm: "0%", base: "7px" }}
                mb={{ lg: "300px", md: "0", base: "0" }}
                p={{ md: "50px", base: "0px" }}
                color="#E0E0E0"
                mt="4"
                bg="#1C1C1C"
                rounded="16px"
                shadow="md"
        >
                <Box
            onClick={() => onToggle()}
            pos={"absolute"}
            top={{ md: "30px", base: "10px" }}
            right={{ md: "30px", base: "10px" }}
            cursor={"pointer"}
          >
            <Exit />
          </Box>
          <Heading
            fontSize={"16px"}
            color={"#fff"}
            fontFamily={"Poopins, sans-serif"}
            textAlign={"center"}
            p={{ md: "0 0 27px 0", base: "35px 0  20px 0 " }}
          >
            CONTACTS
          </Heading>
          
            <Box 
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}

            gap={'20px'}
            p={{md:"0", base:" 0 0 20px 0 "}}
            >
             <Box cursor={'pointer'}> <Phone/></Box>
             <Box cursor={'pointer'}> <Watsapp/></Box>
             <Box cursor={'pointer'}> <Email/></Box>
             <Box cursor={'pointer'}> <Telegram/></Box>
          
          </Box>
        </Box>
      </Slide>
      <Box
        onClick={() => onToggle()}
        display={isOpen ? "block" : "none"}
        transition="1s"
        position="absolute"
        top="0"
        bottom="0"
        right="0"
        left="0"
        bg="rgba(0, 0, 0, 0.7)"
        zIndex="9"
        w="100%"
      />
    </Box>
  );
};

export default ContactsModal;
