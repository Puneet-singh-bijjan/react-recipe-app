import React from "react";

import Popular from "../components/Popular";
import Recipe from "../components/Veggie";
import {motion} from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <Popular />
      <Recipe />
    </motion.div>
  );
}

export default Home;
