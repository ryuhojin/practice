import styles from "./style/Box.module.css";

interface BoxProps {
  size: number;
  children: React.ReactNode;
}
const Box = ({ size, children }: BoxProps) => {
  const sized = `h-${size}`;
  return <div className={`${styles.container} ${sized}`}>{children}</div>;
};
export default Box;
