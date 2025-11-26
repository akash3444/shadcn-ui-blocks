import { Button } from "@/registry/ui/button";
import * as motion from "framer-motion/client";
import { StarIcon } from "lucide-react";

const ButtonsWithTapAnimation = () => (
  <div className="flex items-center gap-2 flex-wrap">
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
