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
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">Hey, I am Maria Girya!</h1>
        <h5 className="App__subtitle">
          A Fullstack Web developer from Brave Ukraine
        </h5>
        <h5 className="App__subtitle">
          Focused on build user-friendly and high-quality websites
        </h5>

        <a href="#portfolio">
          <button className="App__button" type="button">
            Portfolio
          </button>
        </a>
      </header>

      <SideSection />

      <main className="App__main" id="portfolio">
        {PROJECTS.map(project => (
          <Project key={project.name} project={project} />
        ))}
      </main>

      <Footer />

      <UpButton />
    </div>
  );
}

export default App;
