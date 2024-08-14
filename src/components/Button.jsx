export default function Button({ element }) {
  return (
    <button
      className={`${selectedButton === element ? "selectedButton" : ""}`}
      onClick={() => setSelectedButton(element)}
    >
      {element}
    </button>
  );
}
