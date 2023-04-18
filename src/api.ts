import { defineOperationApi } from '@directus/extensions-sdk';

type Options = {
	text: string;
};

export default defineOperationApi<Options>({
	id: 'gcp-pubsub',
	handler: ({ text }) => {
		console.log('GCP pub/sub', text);
	},
});
