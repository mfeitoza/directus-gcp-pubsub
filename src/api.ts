import { defineOperationApi } from '@directus/extensions-sdk';
import { PubSub, } from '@google-cloud/pubsub';
import { Logger } from 'pino';

const pubSubClient = new PubSub();

const initPubMessage = (logger: Logger) => async (topicNameOrId: string, data: string) => {
  const dataBuffer = Buffer.from(data);
  try {
		logger.info(`Publishing message: ${data}`)
		logger.info(`On topic: ${topicNameOrId}`)
    const messageId = await pubSubClient
      .topic(topicNameOrId)
      .publishMessage({data: dataBuffer});
		logger.info(`Message ${messageId} published.`)
    return messageId
  } catch (error: any) {
		logger.error(error)
    throw error
  }
}


type Options = {
	topic: string;
	message: Record<string, any>;
};

export default defineOperationApi<Options>({
	id: 'gcp-pubsub',
	handler: async ({ topic, message }, { logger, exceptions }) => {
		const { BaseException  } = exceptions
		try {
			const pub = initPubMessage(logger)
			const messageId = await pub(topic, JSON.stringify(message));
			return `MessageId: ${messageId}`;
		} catch (err) {
			throw new BaseException(err)
		}
	},
});
