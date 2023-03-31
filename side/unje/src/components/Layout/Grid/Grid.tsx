import { ReactNode } from "react";
import styles from "./styles/Grid.module.css";

interface GridProps {
  children: ReactNode;
}

const Grid = ({ children }: GridProps) => {
  return <div className={styles.cols}>{children}</div>;
};
export default Grid;
