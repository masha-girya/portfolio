import React from 'react';
import {
  SideSection,
  Project,
  Footer,
  UpButton,
} from './components';
import { PROJECTS_CONSTANTS as PROJECTS } from './app-constants';
import './App.scss';

function App() {
  return (
    <main className="App">
      <div className="App__header">
        <div className="App__header-box">
          <h1 className="App__title">Hi, I am Maria Girya!</h1>
          <h5 className="App__subtitle">
            A Fullstack Web developer from Brave Ukraine
          </h5>
          <h5 className="App__subtitle">
            Focused on build user-friendly and high-quality websites
          </h5>
        </div>
        <div className="App__links">
          <a href="#portfolio" className="App__button--link">
            <button className="App__button" type="button">
              Portfolio
            </button>
          </a>
          <a
            // eslint-disable-next-line max-len
            href="https://drive.google.com/file/d/1IhTa-_ESST9T4BISmK8Z48nJtCSXBUY6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="App__button App__button--resume" type="button">
              Resume
            </button>
          </a>
        </div>
      </div>

      <SideSection />

      <main className="App__main" id="portfolio">
        {PROJECTS.map(project => (
          <Project key={project.name} project={project} />
        ))}
      </main>

      <Footer />

      <UpButton />
    </main>
  );
}

export default App;
