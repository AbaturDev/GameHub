import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import like from "../assets/thumbs-up.webp";
import { Image, type ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

export const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: like, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image marginTop={1} {...emojiMap[rating]} />;
};
