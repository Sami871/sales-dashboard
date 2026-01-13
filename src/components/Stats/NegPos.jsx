import { ArrowUp, ArrowDown } from "lucide-react";

const NegPos = ({ value }) => {
  const isPositive = value >= 0;

  return (
    <div
      className={`flex items-center gap-1 text-sm font-medium ${
        isPositive ? "text-green-600" : "text-red-600"
      }`}
    >
      {isPositive ? (
        <ArrowUp size={16} />
      ) : (
        <ArrowDown size={16} />
      )}
      {Math.abs(value)}%
    </div>
  );
};

export default NegPos;
