import React from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";


const cardVariantsSettings = {
    offscreen: {
        y: 50,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.9
        }
    }
};

const  DownAnimation = ({ children }) => {

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div variants={cardVariantsSettings}>
                {children}
            </motion.div>
        </motion.div>
    );
}

export default DownAnimation