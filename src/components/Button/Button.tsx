import styles from "./Button.module.css";

import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

type IVariant = "normal" | "outline" | "ghost";
interface IProps {
  className?: string;
  variant?: IVariant;
}
export const Button: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  variant = "normal",
}) => {
  const _class = clsx(styles.root, className, {
    [styles.normal]: variant === "normal",
    [styles.outline]: variant === "outline",
    [styles.ghost]: variant === "ghost",
  });
  return <button className={_class}>{children}</button>;
};
