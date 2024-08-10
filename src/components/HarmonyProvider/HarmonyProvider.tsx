/**
 * HarmonyProvider作为祖先组件，传递主题，让后代消费
 * @param param0 
 * @returns 
 */

import { Theme,webLightTheme } from "harmony-ui";
import React from "react";
import { useStyles } from "./useStyles.styles";

// 1. 创建context
type ThemeContextValue = Theme | Partial<Theme> | undefined;
const ThemeContext = React.createContext<ThemeContextValue>(undefined);
// 2. 创建Provider
export type HarmonyProviderProps = React.HTMLAttributes<
  React.ChildContextProvider<ThemeContextValue>
> & {
  theme?: ThemeContextValue;
};
export const HarmonyProvider = ({
  className,
  theme = webLightTheme,
  children,
  ...restProps
}:HarmonyProviderProps) => {
  const cls = useStyles({className,theme})
  return <ThemeContext.Provider value={theme} {...restProps}>
    <div className={cls}>
      {children}
    </div>
  </ThemeContext.Provider>
}
// 