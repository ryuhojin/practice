import { ReactNode } from "react";
import styles from "./styles/Col.module.css";

interface ColProps {
  size: number;
  children: ReactNode;
}

const Cols = ({ size, children }: ColProps) => {
  const colSize = `cols-${size}`;
  return <div className={`${styles.cols} ${colSize}`}>{children}</div>;
};

export default Cols;
