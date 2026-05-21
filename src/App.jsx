import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import Media from './pages/Media'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import ListingPage from './pages/ListingPage'
import ProjectPage from './pages/ProjectPage'

function Shell() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<ListingPage title="Architectural Projects" type="Our Services" />} />
          <Route path="/architectural-projects" element={<ListingPage title="Architectural Projects" type="Our Services" />} />
          <Route path="/architectural-projects/:slug" element={<ProjectPage />} />
          <Route path="/interior" element={<ListingPage title="Interior Design" type="Interior Services" />} />
          <Route path="/construction" element={<ListingPage title="Construction" type="Construction Services" />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news-media" element={<Media />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
