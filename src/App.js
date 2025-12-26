import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Futer from './Components/Futer'
import Main from './Components/Main' // твоя стартовая страница
import About from './Components/About'
import Artworks from './Components/Artworks'
import Contact from './Components/Contact'
import ArtworkPage from './Components/ArtworkPage'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/artworks' element={<Artworks />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/artworks/:id' element={<ArtworkPage />} />
			</Routes>
			<Futer />
		</Router>
	)
}

export default App
