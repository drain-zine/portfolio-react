import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation} from "framer-motion";

const FadeInWhenVisible = ({children}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    // handle visibilty
    useEffect(() => {
        if(inView){
            controls.start("visible");
            console.log("element visible");
        } else {
           controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
        >
          {children}
        </motion.div>
      );
}

export default FadeInWhenVisible;