import * as Font from "expo-font";
import * as React from "react";
import * as Device from "expo-device";

export default function useLoadResources(): [boolean, string] {
  const [isLoadingComplete, setLoadingComplete] = React.useState<boolean>(
    false
  );
  const [deviceType, setDeviceType] = React.useState<string>("");

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        Promise.all([
          await Font.loadAsync({
            "montserrat-regular": require("~/assets/fonts/Montserrat-Regular.ttf"),
            "montserrat-semibold": require("~/assets/fonts/Montserrat-SemiBold.ttf"),
          }),
          await Device.getDeviceTypeAsync(),
        ]).then(([_, deviceResponse]) => {
          setDeviceType(
            deviceResponse === Device.DeviceType.TABLET ? "tablet" : "mobile"
          );
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return [isLoadingComplete, deviceType];
}
