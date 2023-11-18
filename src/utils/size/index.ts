import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const getHeightByPercent = (percent: number) => {
  if (percent > 100) {
    return height;
  }
  if (percent < 0) {
    return 0;
  }
  return (percent * height) / 100;
};
