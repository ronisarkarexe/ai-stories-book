import { FC } from "react";

interface SSButtonProps {
  text: string;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const SSButton: FC<SSButtonProps> = ({
  text,
  isLoading = false,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : text}
    </button>
  );
};

export default SSButton;
