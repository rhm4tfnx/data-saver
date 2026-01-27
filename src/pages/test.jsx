import { useState } from "react";
import {
  CloudUpload,
  Menu,
  Search as SearchIcon,
  FileText,
  MoreVertical,
  Info,
  CheckSquare,
  Camera,
  Check,
  ChevronLeft,
  Plus,
} from "lucide-react";

const MobileAppContainer = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  const recentItems = [
    { id: 1, name: "Lorum aaltp.pdf", date: "2026-01-12", size: "10.1 MB" },
    { id: 2, name: "Lourr nattp.docx", date: "2026-01-10", size: "8.5 MB" },
  ];

  const searchResults = [
    { id: 1, name: "Uoim Pot rioor...", date: "2026", size: "10.1 MB" },
    { id: 2, name: "Soms", date: "2027", size: "102.8 MB" },
    { id: 3, name: "bliprrdt", date: "2018", size: "20.1 MB" },
    { id: 4, name: "Sea plat", date: "2027", size: "202.7 MB" },
  ];

  const renderHome = () => (
    <div className="flex flex-col h-full bg-white animate-in fade-in duration-300">
      <header className="p-4 flex justify-between items-center border-b border-gray-100">
        <SearchIcon size={22} className="text-gray-400 cursor-pointer" />
        <h1 className="font-black text-lg text-gray-800 tracking-tighter uppercase">
          Home
        </h1>
        <Menu size={22} className="text-gray-400 cursor-pointer" />
      </header>
      <main className="p-6 space-y-6 flex-1 overflow-y-auto">
        {/* Save New Data Card */}
        <div
          onClick={() => setCurrentScreen("save")}
          className="w-full bg-[#4A78A0] rounded-2xl p-12 flex flex-col items-center justify-center text-white shadow-lg cursor-pointer hover:bg-[#3d6385] transition-all active:scale-[0.98]"
        >
          <CloudUpload size={60} strokeWidth={1.5} />
          <span className="mt-3 font-bold text-sm tracking-widest uppercase">
            Save New Data
          </span>
        </div>

        <div
          onClick={() => setCurrentScreen("search")}
          className="w-full bg-gray-100 rounded-xl py-4 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-200 transition active:scale-[0.98]"
        >
          <span className="font-bold text-xs tracking-widest uppercase">
            Find Saved Data
          </span>
        </div>

        <div className="pt-4">
          <h2 className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-4 ml-1">
            Recent Items
          </h2>
          <div className="space-y-3">
            {recentItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="bg-blue-50 p-2.5 rounded-xl">
                  <FileText size={20} className="text-[#4A78A0]" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-bold text-gray-800">{item.name}</p>
                  <p className="text-[10px] text-gray-400 font-medium italic">
                    Saved: {item.date}
                  </p>
                </div>
                <MoreVertical
                  size={18}
                  className="text-gray-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );

  const renderSave = () => (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-right duration-300">
      <header className="p-4 flex justify-between items-center border-b border-gray-100">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setCurrentScreen("home")}
        >
          <Info size={18} className="text-gray-400" />
          <h1 className="font-bold text-[11px] text-gray-500 uppercase tracking-widest">
            Save New Data
          </h1>
        </div>
        <div
          className="bg-[#4A78A0] p-1 rounded cursor-pointer"
          onClick={() => setCurrentScreen("home")}
        >
          <Check size={16} className="text-white" />
        </div>
      </header>
      <main className="p-6 space-y-5 overflow-y-auto">
        {["Title", "Category", "Category"].map((label, idx) => (
          <div key={idx} className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 ml-1">
              {label}
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-xs outline-none focus:border-[#4A78A0] transition"
              />
              {idx === 1 && (
                <CheckSquare
                  size={18}
                  className="absolute right-3 top-3 text-blue-400"
                />
              )}
            </div>
          </div>
        ))}
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-400 ml-1">
            Notes
          </label>
          <div className="relative">
            <textarea className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-xs outline-none h-20 resize-none focus:border-[#4A78A0]" />
            <Camera
              size={18}
              className="absolute right-3 top-3 text-gray-300"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-400 ml-1">
            Tags
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-xs outline-none focus:border-[#4A78A0]"
            />
            <FileText
              size={18}
              className="absolute right-3 top-3 text-gray-300"
            />
          </div>
        </div>
        <div className="space-y-1 pb-4">
          <label className="text-[10px] font-bold text-[#4A78A0] ml-1">
            Sopet
          </label>
          <input
            type="text"
            className="w-full border-b-2 border-gray-50 p-2 text-xs outline-none focus:border-[#4A78A0]"
          />
        </div>
        <button
          onClick={() => setCurrentScreen("home")}
          className="w-full bg-[#4A78A0] text-white font-bold py-4 rounded-xl shadow-lg uppercase text-xs tracking-widest active:scale-95 transition mt-4"
        >
          Save
        </button>
      </main>
    </div>
  );

  const renderSearch = () => (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-right duration-300">
      <header className="p-4 flex items-center border-b border-gray-100">
        <ChevronLeft
          size={24}
          className="text-gray-400 cursor-pointer"
          onClick={() => setCurrentScreen("home")}
        />
        <h1 className="flex-1 text-center font-bold text-[11px] text-gray-500 uppercase tracking-widest mr-6">
          Find Saved Data
        </h1>
        <Menu size={22} className="text-gray-400" />
      </header>
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="p-5 space-y-4">
          <div className="relative">
            <SearchIcon
              size={18}
              className="absolute left-4 top-3 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-11 pr-4 text-xs outline-none focus:border-[#4A78A0]"
            />
          </div>
          <div className="flex space-x-6 overflow-x-auto no-scrollbar py-2 border-b border-gray-50">
            {["All", "Docs", "Images", "Audio", "Links"].map((cat, i) => (
              <span
                key={i}
                className={`text-[10px] font-black uppercase tracking-wider cursor-pointer ${
                  i === 0
                    ? "text-[#4A78A0] border-b-2 border-[#4A78A0] pb-2"
                    : "text-gray-300"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-5 divide-y divide-gray-50">
          {searchResults.map((res) => (
            <div
              key={res.id}
              className="py-4 flex items-center group cursor-pointer"
            >
              <div className="bg-gray-50 p-2.5 rounded-xl group-hover:bg-blue-50 transition">
                <FileText
                  size={20}
                  className="text-gray-400 group-hover:text-[#4A78A0]"
                />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-xs font-bold text-gray-800">{res.name}</p>
                <p className="text-[9px] text-gray-400 font-medium uppercase tracking-tighter">
                  Information Details • {res.date}
                </p>
              </div>
              <span className="text-[10px] font-bold text-gray-400">
                {res.size}
              </span>
            </div>
          ))}
        </div>
        <div className="p-6 flex justify-end">
          <button className="bg-[#4A78A0] text-white p-4 rounded-full shadow-xl hover:shadow-[#4a78a0]/40 transition active:scale-90">
            <Plus size={24} />
          </button>
        </div>
      </main>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      {/* Container Lebar Mobile (Tanpa Bingkai HP) */}
      <div className="w-full max-w-[400px] h-[750px] bg-white shadow-2xl overflow-hidden flex flex-col">
        {currentScreen === "home" && renderHome()}
        {currentScreen === "save" && renderSave()}
        {currentScreen === "search" && renderSearch()}
      </div>
    </div>
  );
};

export default MobileAppContainer;
