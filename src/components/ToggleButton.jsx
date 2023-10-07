import "./styles.css";


export const ToggleButton = ({ open, controls, label, onClick }) => {
  return (
    <button
      type="button"
      aria-controls={controls}
      aria-expanded={open}
      aria-label={label}
      onClick={onClick}
      className="toggleButon"
    >
      <span className="line-1"></span>
      <span className="line-2"></span>
    </button>
  );
};