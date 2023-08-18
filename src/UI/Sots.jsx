import { motion } from 'framer-motion'
import React from 'react'
import Vector from '../assets/vector'

const Sots = ({state, sot, media, className, idx,link}) => {
    const count = 10;
    const countArray = Array.from({ length: count }, (_, index) => index + 1);
  return (
    <div className={className}>
          {countArray.map((index) => (
            <div className="vector">
              {index === idx && state === 2 ? (
                <motion.div
                  initial={{ scale: 0 }} // начальный масштаб блока
                  animate={{ scale: 1 }} // конечный масштаб блока
                  transition={{ duration: 1.5, ease: "anticipate" }} // начальный масштаб блока
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  style={{ cursor: "pointer" }}
                >
                    <a href={link} >
                     {sot}
                    </a>
                 
                </motion.div>
              ) : (
                <Vector media={media} />
              )}
            </div>
          ))}
        </div>
  )
}

export default Sots