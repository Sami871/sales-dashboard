const TransferCard = ({
  title,
  description,
  amount,
  icon: Icon,
  iconBg,
  iconColor,
}) => {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 w-60 shadow-sm">
      
      <div className={`w-12 h-12 flex items-center justify-center rounded ${iconBg}`}>
        <Icon className={iconColor} size={20} />
      </div>

      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
        <span className="text-gray-700 font-medium mt-1">{amount}</span>
      </div>
    </div>
  );
};

export default TransferCard;
