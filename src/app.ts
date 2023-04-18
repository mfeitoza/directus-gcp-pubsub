import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'gcp-pubsub',
	name: 'Google Cloud Pub/Sub',
	icon: 'publish',
	description: 'Publish message on a Pub/Sub topic.',
	overview: ({ text, message }) => [
		{
			label: 'Topic',
			text: text,
		},
		{
			label: 'Message',
			text: message,
		},
	],
	options: [
		{
			field: 'topic',
			name: 'Topic',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'message',
			name: 'Message',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
	],
});
