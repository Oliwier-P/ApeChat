import "./style.scss";

type MessageArray = {
  user: string;
  time: string;
  text: string;
};

export function MessagesContianer() {
  const messages: MessageArray[] = [];

  return (
    <>
      <div className="messages_container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.user === "Current username" ? "user" : "friend"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
    </>
  );
}
