import styled from "styled-components/native";
import {
  get_height_percentage_to_dp,
  get_width_percentage_to_dp,
} from "~/helpers/get_dimensions";
import { PRIMARY_DARK, PRIMARY_LIGHT } from "~/consts/colors";
import { MS_REGULAR, MS_SEMIBOLD } from "~/consts/font-family";
import { FS_12PX, FS_14PX, FS_24PX } from "~/consts/font-size";
import { LinearGradient } from "expo-linear-gradient";
import { GRADIENT_COLOR } from "~/consts/colors";
import { FS_16PX } from "~/consts/font-size";
import { TextType } from "~/consts/interfaces";

export const ImageBackground = styled.ImageBackground.attrs({
  source: require("~/assets/images/Background.png"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: ${get_height_percentage_to_dp("6%")}px;
  width: ${get_width_percentage_to_dp("86%")}px;
  background-color: #fff;
  border-radius: 8px;
  padding: ${get_height_percentage_to_dp("3%")}px
    ${get_height_percentage_to_dp("3.5%")}px
    ${get_height_percentage_to_dp("8.5%")}px;
`;

export const WelcomeText = styled.Text`
  font-family: ${MS_REGULAR};
  text-align: center;
  font-size: ${FS_24PX};
  color: ${PRIMARY_DARK};
`;

export const DescriptionText = styled.Text`
  font-family: ${MS_SEMIBOLD};
  text-align: center;
  font-size: ${FS_12PX};
  color: ${PRIMARY_LIGHT};
  margin-top: ${get_height_percentage_to_dp("2%")}px;
  line-height: 20px;
`;

export const TouchableFormButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 50%;
  z-index: 1;
  margin-top: -${get_height_percentage_to_dp("3.6%")}px;
`;

export const FormButton = styled(LinearGradient).attrs({
  colors: [PRIMARY_DARK, GRADIENT_COLOR],
  start: { x: 0.6, y: 0 },
})`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 16px 0px;
`;

export const FormButtonText = styled.Text`
  font-family: ${MS_SEMIBOLD};
  font-size: ${FS_16PX};
  color: #fff;
`;

export const TouchableRecoveryPassword = styled.TouchableOpacity``;

export const RecoveryPassword = styled.Text<TextType>`
  font-family: ${MS_REGULAR};
  font-size: ${FS_14PX};
  color: #fff;
  margin-top: ${(props) =>
    props.marginTop ? get_height_percentage_to_dp(`${props.marginTop}%`) : 0}px;
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
`;
