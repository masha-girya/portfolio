import { Header } from '../header';
import { PortfolioList } from '../portfolio-list';
import { SideSection } from '../side-section';
import { Footer } from '../footer';
import { UpButton } from '../up-button';
import './main.scss';
// import { Icon } from '../icon';

export const Main = () => {
  return (
    <div className="main">
      <div className="main__gradientBox">
        {/* <div className="main__gradientBox__noise">
          <Icon type="noise" />
        </div> */}
        <Header />
        <SideSection />
        <PortfolioList />
      </div>
      <Footer />
      <UpButton />
    </div>
  );
};
