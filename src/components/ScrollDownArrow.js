import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const ScrollDownArrow = () => {
    return (
        <motion.div
        className="mx-auto text-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        <motion.div
          animate={{ y: [-50, 0, -50], color: ['#525252', '#262626', '#525252'] }}
          transition={{ repeat: Infinity, delay: 2, duration: 2 }}
        >
          <FontAwesomeIcon icon={faArrowDownLong} />
        </motion.div>
      </motion.div>
    )
}

export default ScrollDownArrow;