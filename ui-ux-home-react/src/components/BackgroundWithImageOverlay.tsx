import { IMAGE } from "../constants/images";
import { cn } from "../utils/classnames";

const BackgroundWithImageOverlay = ({ image }: { image: IMAGE }) => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Image as background */}
      <img
        src={image.background}
        alt="Background"
        className="object-cover object-center absolute inset-0 aspect-5/3 w-full pad:h-full"
      />

      {image.cutout && (
        <img
          src={image.cutout}
          alt="cutout"
          className={cn(
            "aspect-auto max-w-[40%] max-h-[60%]",
            "pad:w-auto pad:h-[110%] pad:max-w-none pad:max-h-none",
            "absolute z-10",
            "-top-[70px] pad:-top-[90px] right-[10%]"
          )}
        />
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient aspect-5/3 pad:aspect-auto w-full top-px z-20" />
    </div>
  );
};

export default BackgroundWithImageOverlay;
