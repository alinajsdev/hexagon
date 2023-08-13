import React from 'react'
import Vector from '../assets/vector';


const VectorUI = ({media, className}) => {
  const count = 10;
  const countArray = Array.from({ length: count }, (_, index) => index + 1);
  return (
    <div className={className}>
          {countArray.map((el, index) => (
            <div className="vector">
              <Vector media={media} />
            </div>
          ))}
        </div>
  )
}

export default VectorUI