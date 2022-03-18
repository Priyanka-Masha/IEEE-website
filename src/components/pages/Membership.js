
   
import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../../Assets/images.js"

import "./Membership.css"

const Membership = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();


  return (
    <div className="Membership">
      <motion.div  ref={carousel} className="carousel">
        <motion.div drag="x" 
        dragConstraints={{ right:.1}}  className="inner-carousel">,
          {images.map((image) => {
            return (
              <motion.div className="item">
                <img src={image} alt="" />
              </motion.div>
            );
          })}

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Membership;
