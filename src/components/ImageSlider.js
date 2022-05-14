import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const wrap = (start, end, current) => {
    const range = end - start;
    return ((((current - start) % range) + range) % range) + start;
}

const swipePower = 10000;

const calculateSwipe = (offset, velocity) => {
    return Math.abs(offset) * velocity;
}

const variants = {
    initial: (direction) => {
        return {
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        };
    },
    animate: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
        }
    }
}

const ImageSlider = ({ path, images, className = "max-w-3xl" }) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const currentIndex = wrap(0, images.length, page);

    const changePage = newDir => {
        setPage([page + newDir, newDir]);
    }


    return (
        <div className={`flex items-center relative overflow-hidden bg-neutral-200 shadow-lg shadow-neutral-700/50 aspect-video rounded-xl w-full dark:bg-slate-900 dark:shadow-black/30 ${className}`}>
            <AnimatePresence
                initial={false}
                custom={direction}
            >
                <motion.img
                    className="absolute object-cover h-full w-full object-center rounded-xl"

                    key={page}
                    src={path + images[currentIndex]}
                    alt={`${currentIndex + 1}/${images.length} image of the project`}
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}

                    drag={images.length > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}

                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = calculateSwipe(offset.x, velocity.x);
                        if (swipe < -swipePower) {
                            changePage(1)
                        } else if (swipe > swipePower) {
                            changePage(-1);
                        }
                    }}
                />

            </AnimatePresence>
            {
                (images.length > 1) &&

                <>
                    <button className="slider-btn left-5" aria-label="Previous image" onClick={() => { changePage(-1) }}>
                        <FontAwesomeIcon icon={faAngleLeft} fixedWidth />
                    </button>

                    <button className="slider-btn right-5" aria-label="Next image" onClick={() => { changePage(1) }}>
                        <FontAwesomeIcon icon={faAngleRight} fixedWidth />
                    </button>
                </>
            }

        </div>
    )
}

export default ImageSlider