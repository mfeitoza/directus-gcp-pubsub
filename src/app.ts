import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'gcp-pubsub',
	name: 'Google Cloud Pub/Sub',
	icon: 'publish',
	description: 'Publish message on a Pub/Sub topic.',
	overview: ({ text }) => [
		{
			label: 'Text',
			text: text,
		},
	],
	options: [
		{
			field: 'text',
			name: 'Text',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
	],
});
