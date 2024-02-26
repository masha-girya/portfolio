import {
  Header,
  PortfolioList,
  SideSection,
  Footer,
  UpButton,
} from 'components';
import './main.scss';

export const Main = () => {
  return (
    <div className="main">
      <div className="main__gradientBox">
        <Header />
        <SideSection />
        <PortfolioList />
        <UpButton />
      </div>
      <Footer />
    </div>
  );
};
