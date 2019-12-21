import { makeStyles } from "@material-ui/styles";
// eslint-disable-next-line no-unused-vars
import { PropsOfStyles, Styles, WithStylesOptions } from "@material-ui/styles/withStyles";
// eslint-disable-next-line no-unused-vars
import { DefaultTheme } from "@material-ui/styles/defaultTheme";
// eslint-disable-next-line no-unused-vars
import { Omit } from "@material-ui/types";
// eslint-disable-next-line no-unused-vars
import { StylesHook } from "@material-ui/styles/makeStyles/makeStyles";

export function useStyles<S, Theme = DefaultTheme, Props extends {} = {}, ClassKey extends string = string>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, "withTheme">,
  props?: any | PropsOfStyles<S>
): Record<ClassKey, string> {
  const hook: StylesHook<Styles<Theme, Props, ClassKey>> = makeStyles(styles, options);
  return hook(props);
}

export function useNamedStyles<S, Theme = DefaultTheme, Props extends {} = {}, ClassKey extends string = string>(
  classNamePrefix: string,
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, "withTheme">,
  props?: any
) {
  return useStyles(styles, { ...options, classNamePrefix }, props);
}
