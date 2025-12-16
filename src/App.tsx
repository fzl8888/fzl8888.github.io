import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from './components/Header'
import Home from './pages/Home'
import Misc from './pages/Misc'
import Contact from './pages/Contact'
import MuseumX from './pages/MuseumX'
import Footer from './components/Footer'

function App() {
  const personSchema = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Zhilin Fan",
    "jobTitle": "Full-stack Developer and AIED Researcher",
    "affiliation": "Beijing Normal University",
    "url": "https://fzl8888.github.io/",
    "sameAs": "https://github.com/fzl8888"
  };

  return (
    <div className="App min-h-screen bg-base-100 text-base-content">
      <Helmet>
        <title>Greeting from Zhilin👋</title>
        <meta name="description" content="Hi, there! I'm Zhilin, a full-stack developer and AIED researcher currently based in Beijing Normal University, the People's Republic of China." />
        <meta name="keywords" content="Zhilin Fan, profile, portfolio" />
        <link rel="canonical" href="https://fzl8888.github.io/" />
        <script type="application/ld+json">
            {JSON.stringify(personSchema)}
        </script>
      </Helmet>
      <Header />
      <div className='content-wrapper flex flex-col justify-between min-h-[calc(100vh-80px)] pt-15' >
        <Routes>
        <Route path='/' Component={Home} />
          <Route path='/misc' Component={Misc} />
          <Route path='contact' Component={Contact} />
          <Route path='/museumx' Component={MuseumX} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
