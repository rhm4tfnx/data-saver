const Label = (props) => {
  const { id, children } = props;
  return (
    <label
      className="text-[10px] font-bold text-gray-400 ml-1 uppercase tracking-wider"
      id={id}
    >
      {children}
    </label>
  );
};

export default Label;
