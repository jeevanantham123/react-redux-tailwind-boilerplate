import Pagelayout from "@components/Pagelayout";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Pagelayout>
      <div className="text-50">I am HomePage</div>
    </Pagelayout>
  );
};

export default HomePage;
