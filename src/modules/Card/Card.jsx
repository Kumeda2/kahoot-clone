import { useState } from "react";
import cl from "./Card.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Card({ title, img }) {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <motion.div
      className={cl.card}
      onHoverStart={() => setShowTitle(true)}
      onHoverEnd={() => setShowTitle(false)}
    >
      <AnimatePresence>
        {showTitle && (
          <motion.div
            className={cl.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={cl.background} />
            <motion.h3
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              className={cl.title}
            >
              {title}
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
      <img src={img} />
    </motion.div>
  );
}
