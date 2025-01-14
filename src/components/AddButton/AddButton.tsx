import "./style.scss";

type AddButtonProps = {
  onClick: () => void;
};

export function AddButton({ onClick }: AddButtonProps) {
  return (
    <>
      <button className="add_friend" onClick={onClick}>
        +
      </button>
    </>
  );
}
