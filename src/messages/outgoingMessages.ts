export enum SupportedMessage {
    AddChat = "ADD_CHAT",
    UpdateChat = "UpdateChat",
}

type MessagePayload = {
    chatId: string,
    roomId: string;
    message: string;
    name: string;
    upvotes: number;
}

export type OutgoingMessage = {
    type: SupportedMessage.AddChat,
    payload: MessagePayload
} | {
    type: SupportedMessage.UpdateChat,
    payload: Partial<MessagePayload>
}