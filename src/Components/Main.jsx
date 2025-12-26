import { useEffect, useState } from 'react'
import ph1 from '../img/ph1.jpg'
import ph2 from '../img/ph2.jpg'
import ph3 from '../img/ph3.jpg'
import '../css/main.css'

function Main() {
	const images = [ph1, ph2, ph3]
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % images.length)
		}, 5000)

		return () => clearInterval(interval)
	}, [images.length])

	return (
		<main
			className='main'
			style={{ backgroundImage: `url(${images[index]})` }}
		></main>
	)
}

export default Main
