import { FC, PropsWithChildren } from "react";
import styles from "./Group.module.css";
import clsx from "clsx";

type IVariant = "vertical" | "horizontal";

interface IProps {
  className?: String;
  variant?: IVariant;
}
export const Group: FC<PropsWithChildren<IProps>> = ({
  className,
  children,
  variant = "horizontal",
}) => {
  const _class = clsx(styles.rootgroup, className, {
    [styles.group_vertical]: variant === "vertical",
  });
  return <div className={_class}>{children}</div>;
};
