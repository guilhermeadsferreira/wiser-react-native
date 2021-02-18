import { Dimensions, PixelRatio } from "react-native";

export const get_width_percentage_to_dp = (value) => {
  const screenWidth = Dimensions.get("window").width;
  const widthPercent = parseFloat(value) / 100;
  return PixelRatio.roundToNearestPixel(screenWidth * widthPercent);
};

export const get_height_percentage_to_dp = (value) => {
  const screenHeight = Dimensions.get("window").height;
  const heightPercent = parseFloat(value) / 100;
  return PixelRatio.roundToNearestPixel(screenHeight * heightPercent);
};
