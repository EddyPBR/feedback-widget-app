import React, { FC } from "react";

import { View, Text } from "react-native";
import Option from "../Option";
import Copyright from "../Copyright";

import feedbackTypes from "../../utils/feedbackTypes";
import styles from "./styles";

const Options: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option key={key} title={value.title} image={value.image} />
        ))}
      </View>

      <Copyright />
    </View>
  );
};

export default Options;
