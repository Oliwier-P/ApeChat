import "./style.scss";

export function InputContianer() {
  return (
    <>
      <div className="input_container">
        <input className="input_message" type="text" placeholder="Type a message..." />
        <button className="button_send_message">Send</button>
      </div>
    </>
  );
}
