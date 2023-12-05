/* eslint-disable max-len */
// import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Main } from './components';
import { SEO_CONSTANTS } from './app-constants';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Main />}>
    //     {/* <Route path="portfolio" element={<Main />} /> */}
    //     {/* <Route path="portfolio/:projectSlug" element={<ProjectPage />} /> */}
    //     <Route path=":projectSlug" element={<ProjectPage />} />
    //   </Route>
    //   <Route path="/portfolio" element={<Main />}>
    //     {/* <Route path="portfolio" element={<Main />} /> */}
    //     {/* <Route path="portfolio/:projectSlug" element={<ProjectPage />} /> */}
    //     <Route path=":projectSlug" element={<ProjectPage />} />
    //   </Route>
    // </Routes>
    <>
      <Main />
      <Helmet>
        <title>{SEO_CONSTANTS.title}</title>
        <link rel="canonical" href="https://masha-girya.github.io/portfolio" />
        <meta name="description" content={SEO_CONSTANTS.description} />
        <meta name="keywords" content={SEO_CONSTANTS.keywords} />
        <meta property="og:image" content={SEO_CONSTANTS.image} />

        <meta property="og:url" content="https://masha-girya.github.io/portfolio" />
        <meta property="og:title" content={SEO_CONSTANTS.title} key="title" />
        <meta property="og:description" content={SEO_CONSTANTS.description} />
        <meta property="og:site_name" content="MG Portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="https://masha-girya.github.io/portfolio" />
        <meta property="twitter:image" content={SEO_CONSTANTS.image} />
        <meta property="twitter:title" content={SEO_CONSTANTS.title} />
        <meta property="twitter:description" content={SEO_CONSTANTS.description} />
      </Helmet>
    </>
  );
}

export default App;
