import React from "react";
import { ChevronLeft, Menu, Search, FileText, Plus } from "lucide-react";
import Header from "../components/Elements/Header";
import Button from "../components/Elements/Button";

const FindData = () => {
  // Data dummy sesuai dengan gambar referensi Anda
  const searchResults = [
    {
      id: 1,
      nopol: "B805HGI",
      nosin: "D4HBPU353988",
      noka: "KMHR381ASRU651661",
      type: "HYUNDAI.PALISADE.22 AT SIGNATURE 4 WD | 2023",
      leasing: "NIAGA-WO",
      color: "BIRU",
      notes: "PUTUS",
    },
  ];

  return (
    <div>
      {/* HEADER */}

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
                  {res.nopol}
                </h3>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tight mt-0.5">
                  {res.type}
                </p>
              </div>

              {/* File Size */}
              <span className="text-[10px] font-bold text-gray-400 italic">
                {res.color}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* FLOATING ACTION BUTTON (FAB) */}
      <div className="absolute bottom-6 right-6">
        {/* <button className="bg-[#4A78A0] text-white p-4 rounded-full shadow-xl hover:shadow-[#4a78a0]/40 active:scale-90 transition-all">
          
        </button> */}
        <Button className="rounded-full p-4 active:scale-90">
          <Plus size={24} strokeWidth={2.5} />
        </Button>
      </div>
    </div>
  );
};

export default FindData;
