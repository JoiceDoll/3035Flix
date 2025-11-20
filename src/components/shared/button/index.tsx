type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => (
  <button
    onClick={onClick}
    className={`bg-purple-900 px-4 py-3 rounded-lg cursor-pointer hover:bg-purple-950  transition-colors duration-300 ease-in-out ${className}`}
  >
    {text}
  </button>
);
