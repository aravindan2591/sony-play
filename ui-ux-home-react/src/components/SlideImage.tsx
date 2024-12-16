import { IMAGE } from "../constants/images"; // Assuming IMAGE is correctly defined
import { cn } from "../utils/classnames"; // Ensure this utility works as expected
import "../styles/globals.scss"; // Assuming your global styles are properly set

type ISlideImageProps = {
  image: IMAGE;  // Make sure IMAGE is defined in constants/images
  active: boolean;  // Boolean indicating whether the image is active or not
};

const SlideImage = ({ image, active }: ISlideImageProps) => {
  // Correctly apply the classes based on the `active` condition
  const imageClass = cn(
    "w-24 h-24", 
    "rounded-md pad:rounded-lg"  // Additional rounded corners classes
  );

  // Conditional rendering based on whether the image is active
  if (active)
    return (
      <div className="flex items-center justify-center relative">
        {/* Gradient border only for active images */}
        <div className="absolute">
          <div className="gradient-border-frame pad:gradient-border-frame-desktop p-2" />
        </div>
        <img src={image.thumbnail} alt="img-thumbnail" className={imageClass} />
      </div>
    );

  // Return the image without the gradient border if not active
  return <img src={image.thumbnail} alt="img-thumbnail" className={imageClass} />;
};

export default SlideImage;
