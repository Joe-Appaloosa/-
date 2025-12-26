import React from 'react'
import portr from '../img/portr.jpg'
import '../css/about.css'

const About = () => {
	return (
		<>
			{/* верхний блок */}
			<div className='about-hero'>
				<h1>ABOUT ME</h1>
			</div>

			{/* основной контент */}
			<div className='about-container'>
				<div className='about-text'>
					<p>Artist and collage worker ✂️ DM for sales, inquiries & collabs</p>
				</div>
				<img src={portr} alt='Описание' className='about-image' />
			</div>
		</>
	)
}

export default About
