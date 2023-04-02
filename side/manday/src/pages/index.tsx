import RootTemplate from "@/components/template/RootTemplate";
import HomeContainer from "@/containers/home/HomeContainer";

const Home = ({ data }: any) => {
  return (
    <RootTemplate>
      <HomeContainer />
    </RootTemplate>
  );
};

export default Home;
