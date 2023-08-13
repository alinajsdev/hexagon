import { Box, Slide, useDisclosure ,Heading} from '@chakra-ui/react'
import React from 'react'
import Exit from '../assets/Exit';

const About = ({onToggle, isOpen}) => {


  return (
<Box>
<Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
         
         <Box

         pos={'relative'}
         maxW={{md:"800px", base:"98%"}}
         
         ml={{lg:"23%",sm:"1%", base:"7px"}}
         mb={{lg:"50px",md:"160px", base:"0"}}
           p={{md:"50px", base:"0px"}}
           color="#E0E0E0"
           mt="4"
           bg="#1C1C1C"
           rounded="16px"
           shadow="md"
           fontSize={{md:"16px", base:"14px"}}
           fontFamily={'Poopins, sans-serif'}
         >
           <Box
           onClick={()=> onToggle()}
           pos={'absolute'} top={{md:"30px", base:"10px"}} right={{md:"30px", base:"10px"}} cursor={'pointer'}><Exit/></Box>
            <Heading  fontSize={'16px'} color={'#fff'} fontFamily={'Poopins, sans-serif'} textAlign={'center'} p={{md:"0 0 17px 0", base:"5px 0  0 0 "}}>
         ABOUT US
         </Heading>
           Welcome to the world of innovations and advanced technologies! We
           are a company specialized in the development and manufacturing of
           technological products, as well as providing services in the
           technology sector. Our main mission is to optimize business
           processes through digital transformation, aiming to create a
           high-tech, secure, and eco-friendly future.
           <br />
           <br />
           Welcome to the world of innovations and advanced technologies! We
           are a company specialized in the development and manufacturing of
           technological products, as well as providing services in the
           technology sector. Our main mission is to optimize business
           processes through digital transformation, aiming to create a
           high-tech, secure, and eco-friendly future.
           <br />
           <br />
           We are not confined to the present but boldly look towards the
           future. Our team is always at the forefront of innovation, striving
           for our products and services to consistently meet the most modern
           requirements and expectations of our clients.
           <br />
           <br />
           We invite you to join us on the journey of digital transformation
           and bring to life the most ambitious ideas. Together, we can lay a
           solid foundation for a successful future, built on innovation and
           advanced technologies.
           <br />
           <br />
           The future is already here, and we are thrilled to be your reliable
           partner in its construction. Let's move forward together and make
           the world a better place with the help of advanced technologies and
           our unique expertise.
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
         zIndex="5"
         w="100%"
       />
</Box>
  )
}

export default About