import * as motion from "framer-motion/client";
import { StarIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";

const ButtonsWithTapAnimation = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button asChild>
      <motion.button whileTap={{ scale: 0.85 }}>Tap</motion.button>
    </Button>
    <Button asChild size="icon">
      <motion.button whileTap={{ scale: 0.85 }}>
        <StarIcon />
      </motion.button>
    </Button>
    <Button asChild>
      <motion.button whileTap={{ scale: 0.85 }}>
        <StarIcon /> Star
      </motion.button>
    </Button>
  </div>
);

export default ButtonsWithTapAnimation;
