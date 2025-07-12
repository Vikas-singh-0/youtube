const Button = ({ label, clickHandler, disabled = false }) => {
  return (
    <button
      onClick={(e) => clickHandler()}
      disabled={disabled}
      className={`px-4 py-2 mr-2 h-10 rounded-lg text-white ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
