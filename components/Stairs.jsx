import React from 'react'
import { motion } from 'framer-motion';
const stairsAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    },
}

const reverseIndex = (index) => {

    const totalSteps = 6;
    return totalSteps - index - 1;
}
const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, index) =>
                <motion.div
                    key={index}
                    variants={stairsAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"

                />
            )}
        </>
    )
}

export default Stairs