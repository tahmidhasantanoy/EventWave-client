import { useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const useScrollGrowFromRight = () => {
  const rightAchivementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: rightAchivementRef,

    offset: ["0 1", "1 1"], // Adjusted for more intuitive behavior
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const xAxistransform = useTransform(scrollYProgress, [0, 1], [+100, 0]);
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const rightStyle = {
    scale: scaleValues,
    opacity: opacityTransform,
    x: xAxistransform,
  };

  return {
    rightAchivementRef,
    rightStyle,
  };
};

export default useScrollGrowFromRight;
