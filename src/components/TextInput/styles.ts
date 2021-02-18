import styled from "styled-components/native";
import { ViewProps } from "react-native";
import { PRIMARY_DARK, PRIMARY_LIGHT } from "~/consts/colors";
import { MS_REGULAR } from "~/consts/font-family";
import {
  get_height_percentage_to_dp,
  get_width_percentage_to_dp,
} from "~/helpers/get_dimensions";
import { ERROR_COLOR } from "~/consts/colors";
import { FS_10PX, FS_12PX } from "~/consts/font-size";

interface ViewType extends ViewProps {
  messageError?: string;
}

export const Container = styled.View`
  width: 85%;
  align-self: center;
  margin-top: ${get_height_percentage_to_dp("2.5%")}px;
`;

export const Label = styled.Text`
  font-family: ${MS_REGULAR};
  font-size: ${FS_10PX};
  color: ${PRIMARY_DARK};
  margin-left: ${get_width_percentage_to_dp("2%")}px;
  margin-bottom: ${get_height_percentage_to_dp("1.3%")}px;
`;

export const InputContainer = styled.View<ViewType>`
  width: 100%;
  border-width: 1px;
  border-color: ${(props) =>
    props.messageError ? ERROR_COLOR : PRIMARY_LIGHT};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  padding: 10px 10px 10px;
  font-family: ${MS_REGULAR};
  font-size: ${FS_12PX};
  flex: 1;
`;

export const MessageError = styled.Text`
  font-family: ${MS_REGULAR};
  font-size: ${FS_12PX};
  color: ${ERROR_COLOR};
  margin-left: ${get_width_percentage_to_dp("2%")}px;
  margin-top: ${get_height_percentage_to_dp("1%")}px;
`;

export const ErrorIcon = styled.Image.attrs({
  source: require("~/assets/images/CloseIcon.png"),
})`
  width: ${get_width_percentage_to_dp("3.5%")}px;
  height: ${get_width_percentage_to_dp("3.5%")}px;
  resize-mode: contain;
  margin: 0 12px;
`;
