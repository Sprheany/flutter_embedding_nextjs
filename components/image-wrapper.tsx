import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  src: string;
  darkSrc?: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
};

const ImageWrapper = ({
  src,
  darkSrc,
  width,
  height,
  alt,
  className,
}: Props) => {
  return (
    <>
      <Image
        className={cn("block dark:hidden", className)}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      {darkSrc && (
        <Image
          className={cn("hidden dark:block", className)}
          src={darkSrc}
          alt={alt}
          width={width}
          height={height}
        />
      )}
    </>
  );
};

export default ImageWrapper;
