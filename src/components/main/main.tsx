import { Header } from '../header';
import { PortfolioList } from '../portfolio-list';
import { SideSection } from '../side-section';
import { Footer } from '../footer';
import { UpButton } from '../up-button';
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
