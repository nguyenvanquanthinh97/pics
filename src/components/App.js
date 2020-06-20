import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [], error: null };

	onSearchSubmit = async (term) => {
		try {
			const response = await unsplash.get('/search/photos', {
				params: {
					query: term
				}
			});
			this.setState({ images: response.data.results });
		} catch (error) {
			this.setState({ error });
		}
	};

	render() {
		const { images } = this.state;
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={images} />
			</div>
		);
	}
}

export default App;
