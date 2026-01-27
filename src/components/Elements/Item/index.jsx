import { FileText, MoreVertical } from "lucide-react";

const Item = () => {
  return (
    <div className="flex items-center p-4 bg-white border rounded-2xl shadow-sm">
      <div className="bg-blue-50 p-2.5 rounded-xl">
        <FileText size={20} className="text-[#4A78A0]" />
      </div>
      <div className="ml-4 flex-1">
        <p className="text-sm font-bold text-gray-800">File Name</p>
        <p className="text-[10px] text-gray-400 italic">Saved Date</p>
      </div>
      <MoreVertical size={18} className="text-gray-300" />
    </div>
  );
};

export default Item;
