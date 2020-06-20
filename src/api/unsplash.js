import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID vpLz_O8jes2dPLFKymHDA1uA9D22RXUAR79GdevZIhU'
	}
});
