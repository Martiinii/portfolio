import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const ScrollDownArrow = () => {
  return (
    <motion.div
      className="ml-auto text-3xl flex gap-5 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 2 }}
    >
      <span className="text-xl md:text-3xl">Scroll to discover</span>
      <motion.div
        animate={{ y: [-5, 5, -5], color: ['#525252', '#262626', '#525252'] }}
        transition={{ repeat: Infinity, delay: 2, duration: 2 }}
      >
        <FontAwesomeIcon icon={faArrowDownLong} />
      </motion.div>
    </motion.div>
  )
}

export default ScrollDownArrow;