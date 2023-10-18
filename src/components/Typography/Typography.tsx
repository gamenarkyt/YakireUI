import clsx from "clsx";
import styles from "./Typography.module.css";

import { FC, PropsWithChildren } from "react";

type IVariant = "normal" | "big" | "header";
interface IProps {
  className?: string;
  variant?: IVariant;
}
export const Typography: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  variant = "normal",
}) => {
  const _class = clsx(className, {
    [styles.typography_normal]: variant === "normal",
    [styles.typography_big]: variant === "big",
    [styles.typography_header]: variant === "header",
  });
  return <span className={_class}>{children}</span>;
};
