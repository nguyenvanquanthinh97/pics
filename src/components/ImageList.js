import React from 'react';

import './ImageList.css';

const ImageList = (props) => {
	const { images } = props;

	const renderedImages = images.map(({ id, urls, description }) => (
		<img alt={description} key={id} src={urls.regular} />
	));

	return <div>{renderedImages}</div>;
};

ImageList.defaultProps = {
	images: []
};

export default ImageList;
