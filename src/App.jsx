import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ListingPage from './pages/ListingPage'
import Media from './pages/Media'
import ProjectPage from './pages/ProjectPage'
import Services from './pages/Services'
import Team from './pages/Team'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<ListingPage title="Architecture" type="Architecture Services" />} />
          <Route path="/interior" element={<ListingPage title="Interior" type="Interior Services" />} />
          <Route path="/construction" element={<ListingPage title="Construction" type="Construction Services" />} />
          <Route path="/architectural-projects/:slug" element={<ProjectPage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news-media" element={<Media />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
