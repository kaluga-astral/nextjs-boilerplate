type ImageProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Image = (props: ImageProps) => <img {...props} />;
