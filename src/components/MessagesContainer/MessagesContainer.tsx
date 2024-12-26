import "./style.scss";

type MessageArray = {
  user: string;
  time: string;
  text: string;
};

export function MessagesContianer() {
  const messages: MessageArray[] = [
    { user: "Worekit", time: "01-01-2023", text: "Siema" },
    { user: "John", time: "02-01-2023", text: "Cześć" },
    {
      user: "Worekit",
      time: "03-01-2023",
      text: "Jakaś super długa waidomość żeby zobaczyć co sie stanie z width i height wiec pisze byle co zeby byl tekst XD rafał to super ziomek",
    },
    {
      user: "John",
      time: "03-01-2023",
      text: "Jakaś super długa waidomość żeby zobaczyć co sie stanie z width i height wiec pisze byle co zeby byl tekst XD rafał to super ziomek, Jakaś super długa waidomość żeby zobaczyć co sie stanie z width i height wiec pisze byle co zeby byl tekst XD rafał to super ziomek, Jakaś super długa waidomość żeby zobaczyć co sie stanie z width i height wiec pisze byle co zeby byl tekst XD rafał to super ziomek",
    },
  ];

  return (
    <>
      <div className="messages_container">
        {messages.map((message) => (
          <div className={`message ${message.user === "John" ? "user" : "friend"}`}>
            {message.text}
          </div>
        ))}
      </div>
    </>
  );
}
