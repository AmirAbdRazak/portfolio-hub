import { json } from '@sveltejs/kit';

export function GET() {
	const oembed = {
		author_name: 'Amir Razak',
		author_url: 'https://amirrazak.com',
		provider_name: 'Amir Razak',
		provider_url: 'https://amirrazak.com',
		type: 'photo'
	};

	return json(oembed);
}
