import React from 'react'
import { useParams } from 'react-router-dom'
import artworksData from '../data/artworksData'
import '../css/artworkPage.css'

const ArtworkPage = () => {
	const { id } = useParams()
	const artwork = artworksData.find(art => art.id === id)

	if (!artwork) {
		return <h2>Картина не найдена</h2>
	}

	return (
		<div className='artwork-container'>
			<div className='artwork-text'>
				<h1>{artwork.title}</h1>
				<p>{artwork.description}</p>
			</div>
			<img src={artwork.image} alt={artwork.title} className='artwork-image' />
		</div>
	)
}

export default ArtworkPage
