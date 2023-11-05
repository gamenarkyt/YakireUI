import { FC,  ReactNode } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";

interface IProps {
  className?: string;
  placeholder?: string;
  leftComponents?: ReactNode;
  rightComponents?: ReactNode;
  name: string
}

const Input: FC<IProps> = ({
  className,
  placeholder = "Placeholder",
  leftComponents,
  rightComponents,
  name
}) => {
 console.log('rererer')
  const _class = clsx(styles.yuiinput, styles.originalinput, className);
  return (
    <div className={styles.yuiinput}>
      {leftComponents}
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        className={_class}
      />
      {rightComponents}
    </div>
  );
};

export { Input };
