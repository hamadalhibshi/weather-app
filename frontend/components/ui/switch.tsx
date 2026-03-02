import React from "react";
import { useLanguage } from "@/hooks/use-language";
import { Switch as RNSwitch, SwitchProps } from "react-native";

export const Switch = (props: SwitchProps) => {
  const { isRTL } = useLanguage();

  return (
    <RNSwitch {...props} style={{ transform: [{ scaleX: isRTL ? -1 : 1 }] }} />
  );
};
