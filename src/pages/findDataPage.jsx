import React from "react";
import { ChevronLeft, Menu, Search, FileText, Plus } from "lucide-react";

const FindData = () => {
  // Data dummy sesuai dengan gambar referensi Anda
  const searchResults = [
    {
      id: 1,
      name: "Uoim Pot rioor...",
      info: "INFORMATION DETAILS • 2026",
      size: "10.1 MB",
    },
    {
      id: 2,
      name: "Soms",
      info: "INFORMATION DETAILS • 2027",
      size: "102.8 MB",
    },
    {
      id: 3,
      name: "bliprrdt",
      info: "INFORMATION DETAILS • 2018",
      size: "20.1 MB",
    },
    {
      id: 4,
      name: "Sea plat",
      info: "INFORMATION DETAILS • 2027",
      size: "202.7 MB",
    },
  ];

  const categories = ["ALL", "DOCS", "IMAGES", "AUDIO", "LINKS"];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-0 md:p-4">
      {/* Container Ukuran Mobile Tanpa Bingkai */}
      <div className="w-full max-w-[400px] h-[750px] bg-white shadow-2xl flex flex-col overflow-hidden relative">
        {/* HEADER */}
        <header className="p-4 flex items-center border-b border-gray-50">
          <ChevronLeft
            size={24}
            className="text-gray-400 cursor-pointer hover:text-gray-600"
          />
          <h1 className="flex-1 text-center font-bold text-[11px] text-[#4A78A0] uppercase tracking-[0.2em] mr-6">
            Find Saved Data
          </h1>
          <Menu size={22} className="text-gray-400 cursor-pointer" />
        </header>

        {/* SEARCH BAR & CATEGORIES */}
        <div className="p-5 space-y-5 bg-white">
          {/* Input Search */}
          <div className="relative">
            <Search size={18} className="absolute left-4 top-3 text-gray-300" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-50 border border-gray-100 rounded-full py-2.5 pl-11 pr-4 text-xs outline-none focus:border-[#4A78A0] transition-all"
            />
          </div>

          {/* Tab Categories */}
          <div className="flex space-x-6 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat, i) => (
              <span
                key={i}
                className={`text-[10px] font-black uppercase tracking-wider cursor-pointer whitespace-nowrap transition-all
                  ${i === 0 ? "text-[#4A78A0] border-b-2 border-[#4A78A0] pb-2" : "text-gray-300 hover:text-gray-500"}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* LIST RESULTS */}
        <main className="flex-1 overflow-y-auto px-5 bg-white">
          <div className="divide-y divide-gray-50">
            {searchResults.map((res) => (
              <div
                key={res.id}
                className="py-4 flex items-center group cursor-pointer transition-colors"
              >
                {/* Icon File */}
                <div className="bg-gray-50 p-2.5 rounded-xl group-hover:bg-blue-50 transition-colors">
                  <FileText
                    size={20}
                    className="text-gray-400 group-hover:text-[#4A78A0]"
                  />
                </div>

                {/* Info Text */}
                <div className="ml-4 flex-1">
                  <h3 className="text-xs font-bold text-gray-800 tracking-tight">
                    {res.name}
                  </h3>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tight mt-0.5">
                    {res.info}
                  </p>
                </div>

                {/* File Size */}
                <span className="text-[10px] font-bold text-gray-400 italic">
                  {res.size}
                </span>
              </div>
            ))}
          </div>
        </main>

        {/* FLOATING ACTION BUTTON (FAB) */}
        <div className="absolute bottom-6 right-6">
          <button className="bg-[#4A78A0] text-white p-4 rounded-full shadow-xl hover:shadow-[#4a78a0]/40 active:scale-90 transition-all">
            <Plus size={24} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindData;
