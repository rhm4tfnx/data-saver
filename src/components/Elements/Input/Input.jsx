const Input = ({ className = "", icon, ...rest }) => {
  return (
    <div className="relative">
      <input
        className={`w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-xs outline-none focus:border-[#5A84A2] transition-all shadow-sm ${className}`}
        {...rest}
      />
      {icon && (
        <span className="absolute right-3 top-2.5 text-blue-400">{icon}</span>
      )}
    </div>
  );
};

export default Input;
