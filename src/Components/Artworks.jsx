import { Link } from 'react-router-dom'
import React from 'react'
import artworksData from '../data/artworksData'
import '../css/artworks.css'

const Artworks = () => {
	return (
		<>
			{/* верхняя полоса */}
			<div className='artworks-hero'>
				<h1>Artworks</h1>
			</div>

			{/* сетка */}
			<div className='artworks-container'>
				{artworksData.map(art => (
					<div className='art-card' key={art.id}>
						<Link to={`/artworks/${art.id}`}>
							<img src={art.image} alt={art.title} />
						</Link>
						<p>{art.title}</p>
					</div>
				))}
			</div>
		</>
	)
}

export default Artworks
