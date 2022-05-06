import React, { FC } from "react";

import { Image, ImageProps, TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import styles from "./styles";

type OptionProps = TouchableOpacityProps & {
  title: string;
  image: ImageProps;
};

const Option: FC<OptionProps> = ({ title, image, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Option;
