import {generators, create} from 'sharkhorse';
import uuidV4 from 'uuid/v4';

export const Message = {
  id: null,
  senderID: null,
  recipientIDs: [],
  content: generators.lorem().words(5)
};

export function createMessage({senderID, recipientIDs = []}) {
  const mockMessage = create(Message);

  return Object.assign(mockMessage, {
    id: uuidV4(),
    senderID,
    recipientIDs
  });
}
