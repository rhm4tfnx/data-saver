import { Info, Check, CheckSquare, Camera, FileText } from "lucide-react";
import InputForm from "../components/Elements/Input";
import Button from "../components/Elements/Button";
import { useState } from "react";
import Header from "../components/Elements/Header";

const AddData = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("File harus gambar");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Max 2MB");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
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
        placeholder="Masukkan nosin"
        id="nosin"
        text="Nosin"
        name="nosin"
      />

      <InputForm
        type="text"
        placeholder="Masukkan Noka"
        id="noka"
        text="Noka"
        name="noka"
      />

      <InputForm
        type="text"
        placeholder="Masukkan tipe mobil"
        id="type"
        text="Tipe"
        name="type"
      />

      <InputForm
        type="text"
        placeholder="Masukkan Leasing"
        id="leasing"
        text="Leasing"
        name="leasing"
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
        id="catatan"
        text="Catatan"
        name="catatan"
      />

      <InputForm
        type="file"
        // accept="image/"
        accept=".jpg,.jpeg,.png"
        capture="environment"
        onChange={handleImageChange}
      />

      {preview && <img src={preview} alt="preview gambar" />}
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
  );
};

export default AddData;
