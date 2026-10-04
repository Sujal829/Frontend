// component pattern
const Button = ({ label, onClick, style }) => {
  return (
    <button
      style={{
        padding: "10px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
