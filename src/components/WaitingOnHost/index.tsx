import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '50%',
  },
  end: {
    y: '150%',
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  ease: 'easeInOut',
  repeatType: 'reverse' as const,
};

export default function ThreeDotsWave() {
  return (
    <motion.div
      className="flex gap-3"
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      {Array.from({ length: 3 }).map((_el, i) => {
        return (
          <motion.span
            key={`dot-${i}`}
            className="block size-2 rounded-full bg-white shadow-[0_0_2px_theme(colors.pink.100),inset_0_0_2px_theme(colors.pink.400),0_0_5px_theme(colors.pink.100),0_0_15px_theme(colors.pink.400),0_0_20px_theme(colors.pink.400),0_0_25px_theme(colors.pink.400)]"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        );
      })}
    </motion.div>
  );
}

export type WaitingOnHostProps = Record<never, never>;

export const WaitingOnHost: FC<WaitingOnHostProps> = () => {
  return (
    <div className="flex h-svh w-full items-center justify-center">
      <AnimatePresence>
        <motion.div
          className="z-10 flex w-fit flex-col items-center justify-center gap-8 rounded-lg bg-black p-8 text-center text-xl text-neutral-100"
          exit={{ opacity: 0 }}
        >
          <div className="flex">
            <ThreeDotsWave />
          </div>

          <div>Your coach will be here soon</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
