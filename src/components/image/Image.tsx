// Image.tsx

import React from "react";
import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

const StyledImage = styled.img<ImageProps>`
  width: ${(props) => props.width || "25%"};
  max-height: ${(props) => props.height || "50%"};
  /* max-inline-size: 100%; */
  block-size: auto;
  aspect-ratio: 1;
  object-fit: contain;
  overflow: hidden;
`;

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Image;
