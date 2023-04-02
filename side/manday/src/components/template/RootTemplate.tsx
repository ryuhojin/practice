import Header from "../base/Header";
interface RootTemplateProps {
  children: React.ReactNode;
}
const RootTemplate = ({ children }: RootTemplateProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default RootTemplate;
