const Button = ({
  as: Component = "button",
  children,
  className = "",
  ...rest
}) => {
  return (
    <Component
      {...rest}
      className={` ${className} w-full bg-[#5A84A2]  rounded-xl py-4 flex justify-center text-white font-bold shadow-lg uppercase  hover:bg-[#4a6d85] active:scale-95 transition-all`}
    >
      <span className="font-bold text-xs uppercase tracking-widest">
        {children}
      </span>
    </Component>
  );
};

export default Button;
