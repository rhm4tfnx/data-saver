import { Info, Check, CheckSquare, Camera, FileText } from "lucide-react";
import InputForm from "../components/Elements/Input";
import Button from "../components/Elements/Button";

const AddData = () => {
  return (
    <div>
      <header className="p-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <Info size={18} className="text-gray-400" />
          <h1 className="font-bold text-[11px] text-gray-500 uppercase tracking-widest">
            Save New Data
          </h1>
        </div>
        {/* Ikon Centang Biru */}
        <div className="bg-[#5A84A2] p-1 rounded-md">
          <Check size={14} className="text-white" />
        </div>
      </header>

      {/* FORM BODY */}
      <main className="flex-1 p-6 space-y-5 overflow-y-auto">
        {/* Field: Title */}
        <InputForm
          type="text"
          placeholder="Masukkan Nopol"
          id="nopol"
          text="Nopol"
          name="nopol"
        />

        <InputForm
          type="text"
          placeholder="Masukkan Noka"
          id="noka"
          text="Noka"
          name="noka"
          icon={<CheckSquare size={18} />}
        />

        <InputForm
          type="number"
          placeholder="Masukkan nosin"
          id="nosin"
          text="Nosin"
          name="nosin"
        />

        <InputForm
          type="text"
          placeholder="Masukkan Warna"
          id="color"
          text="Warna"
          name="color"
        />

        <InputForm
          type="text"
          placeholder="Masukkan Catatan"
          id="color"
          text="Catatan"
          name="color"
        />

        {/* Dekorasi Titik-titik */}
        <div className="flex justify-center space-x-1 py-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-1 h-1 bg-gray-200 rounded-full" />
          ))}
        </div>

        {/* TOMBOL SAVE */}
        <div className="pt-2">
          <Button className="">Save</Button>
        </div>
      </main>
    </div>
  );
};

export default AddData;
