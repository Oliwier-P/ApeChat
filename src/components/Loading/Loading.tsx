import "./LoadingStyle.scss";

export function Loading() {
  return (
    <>
      <div className="loading_container">
        <div className="dots_container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </>
  );
}
