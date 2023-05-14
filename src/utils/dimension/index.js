import { Dimensions } from "react-native";
import { heightMobileUI, widhtMobileUI } from "../constant";

export const windowWidht = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export const responsiveWidth = (widht) => {
  return windowWidht * widht / widhtMobileUI
}

export const responsiveHeight = (height) => {
  return windowHeight * height / heightMobileUI
}