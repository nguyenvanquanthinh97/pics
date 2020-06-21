import React from 'react';

import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
	const { images } = props;

	const renderedImages = images.map((image) => (
		<ImageCard image={image} key={image.id} />
	));

	return <div className="image-list">{renderedImages}</div>;
};

ImageList.defaultProps = {
	images: []
};

export default ImageList;
