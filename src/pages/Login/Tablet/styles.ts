import styled from "styled-components/native";
import { GRADIENT_COLOR, PRIMARY_DARK, PRIMARY_LIGHT } from "~/consts/colors";
import { MS_REGULAR, MS_SEMIBOLD } from "~/consts/font-family";
import { FS_14PX, FS_16PX, FS_40PX } from "~/consts/font-size";
import { get_height_percentage_to_dp } from "~/helpers/get_dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { TextType } from "~/consts/interfaces";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Logo = styled.Image.attrs({
  source: require("~/assets/images/BackgroundTablet.png"),
})`
  flex: 3.5;
  height: 100%;
`;

export const ContainerForm = styled.View`
  flex: 6.5;
  background-color: #faf5ff;
  justify-content: center;
`;

export const Form = styled.View`
  width: 78%;
  align-self: center;
`;

export const HeaderContainer = styled.View`
  margin-bottom: ${get_height_percentage_to_dp("2.8%")}px;
`;

export const WelcomeText = styled.Text`
  font-family: ${MS_REGULAR};
  text-align: left;
  font-size: ${FS_40PX};
  color: ${PRIMARY_DARK};
`;

export const DescriptionText = styled.Text<TextType>`
  font-family: ${MS_SEMIBOLD};
  text-align: left;
  font-size: ${FS_16PX};
  color: ${PRIMARY_LIGHT};
  margin-top: ${(props) =>
    props.marginTop ? get_height_percentage_to_dp(`${props.marginTop}%`) : 0}px;
`;

export const TouchableFormButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 100%;
  margin-top: ${get_height_percentage_to_dp("3.8%")}px;
`;

export const FormButton = styled(LinearGradient).attrs({
  colors: [PRIMARY_DARK, GRADIENT_COLOR],
  start: { x: 0.7, y: 0 },
})`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 18px 0px;
`;

export const FormButtonText = styled.Text`
  font-family: ${MS_SEMIBOLD};
  font-size: ${FS_16PX};
  color: #fff;
`;

export const TouchableRecoveryPassword = styled.TouchableOpacity``;

export const RecoveryPassword = styled.Text<TextType>`
  font-family: ${(props) => props.fontFamily ?? MS_REGULAR};
  font-size: ${FS_14PX};
  color: ${(props) => props.color ?? PRIMARY_LIGHT};
  margin-top: ${(props) =>
    get_height_percentage_to_dp(`${props.marginTop}%`) ?? 0}px;
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  text-align: center;
`;
