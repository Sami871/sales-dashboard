import HorizontalBar from "./HorizontalBar";
import ChangeIndicator from "./NegPos";

const StatCard = ({
  amount,
  label,
  change,
  icon: Icon,
  iconBg = "bg-gray-100",
  type,
  prefix,
}) => {
  return (
    <div className="p-4 w-60 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col justify-between">
      <h2 className="text-2xl font-bold text-gray-800">{prefix}{amount}</h2>

      <p className="text-sm text-gray-500 mt-1">{label}</p>

      <div className="flex justify-between items-center mt-4 min-h-10">
        <ChangeIndicator value={change} />

        {type === "icon" ? (
          <div
            className={`w-10 h-10 rounded ${iconBg} flex items-center justify-center`}
          >
            <Icon size={20} className="text-white" />
          </div>
        ) : (
          <HorizontalBar percentage={Math.abs(change)} />
        )}
      </div>
    </div>
  );
};

export default StatCard;
