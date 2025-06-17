const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
