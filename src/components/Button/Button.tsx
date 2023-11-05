import styles from "./Button.module.css";

import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

type IVariant = "normal" | "outline" | "ghost";
interface IProps {
  className?: string;
  variant?: IVariant;
  onClick?: () => void
}
export const Button: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  variant = "normal",
  onClick, ...props
}) => {
  const _class = clsx(styles.root, className, {
    [styles.normal]: variant === "normal",
    [styles.outline]: variant === "outline",
    [styles.ghost]: variant === "ghost",
  });
  return <button onClick={onClick} className={_class} {...props}>{children}</button>;
};
