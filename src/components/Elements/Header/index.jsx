import { Search, Menu } from "lucide-react";

const Header = (props) => {
  const { children } = props;
  return (
    <div className="p-4 flex justify-between items-center border-b border-gray-100">
      <Search size={22} className="text-gray-400" />
      <h1 className="font-bold text-gray-700 text-lg uppercase tracking-tighter">
        {children}
      </h1>
      <Menu size={22} className="text-gray-400" />
    </div>
  );
};

export default Header;
