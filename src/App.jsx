import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Skills />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</>
	)
}

export default App
