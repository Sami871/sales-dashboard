const HorizontalBar = ({ percentage }) => {
  return (
    <div className="w-24">
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default HorizontalBar;
