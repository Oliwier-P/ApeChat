import { InputContianer } from "./InputMessageContainer/InputContianer";
import { MessagesContianer } from "./MessagesContainer/MessagesContainer";

export function ChatMessages() {
  return (
    <>
      <div className="chat_content_messages">
        <MessagesContianer />
        <InputContianer />
      </div>
    </>
  );
}
