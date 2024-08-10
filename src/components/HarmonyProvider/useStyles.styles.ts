import { makeStyles, mergeClasses } from "@griffel/react";
import { HarmonyProviderProps, tokens } from "harmony-ui";
import { useThemeStyleTag } from "./useThemeStyleTag";

const harmonyProviderClassNames = {
  root: "harmony-ui-harmonyProvider",
};

const useBaseStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground1,
    textAlign: "left",
  },
});

export const useStyles = ({ className, theme }: Partial<HarmonyProviderProps>) => {
  const baseStyles = useBaseStyles();
  // 根据theme创建cssrules
  const { themeClassName } = useThemeStyleTag({ theme });
  return mergeClasses(
    harmonyProviderClassNames.root,
    themeClassName,
    baseStyles.root,
    className
  );
};
