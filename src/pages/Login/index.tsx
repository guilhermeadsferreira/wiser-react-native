import React from "react";
import LoginMobile from "./Mobile";
import LoginTablet from "./Tablet";

export interface Props {
  deviceType: string;
}

const Login: React.FC<Props> = ({ deviceType }) => {
  return <>{deviceType === "tablet" ? <LoginTablet /> : <LoginMobile />}</>;
};

export default Login;
