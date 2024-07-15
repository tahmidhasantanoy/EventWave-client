import { useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const useScrollGrowFromLeft = () => {
  const LeftAchivementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: LeftAchivementRef,
    offset: ["0 1", "1 1"], //obj vp
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const xAxistransform = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const leftStyle = {
    scale: scaleValues,
    opacity: opacityTransform,
    x: xAxistransform,
  };
  return {
    LeftAchivementRef,
    leftStyle,
  };
};

export default useScrollGrowFromLeft;
