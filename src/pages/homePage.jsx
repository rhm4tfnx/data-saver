import { CloudUpload } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Elements/Header";
import Button from "../components/Elements/Button";
import Item from "../components/Elements/Item";

const Home = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <Header>Home</Header>

      {/* Content */}
      <main className="p-6 space-y-6 flex-1 overflow-y-auto">
        {/* Save New Data */}

        <Link
          to={"/add"}
          className="w-full bg-[#4A78A0] rounded-2xl p-12 flex flex-col items-center justify-center text-white shadow-lg cursor-pointer hover:bg-[#3d6385] transition-all active:scale-[0.98]"
        >
          Save new Data
          <CloudUpload size={60} strokeWidth={1.5} />
          <span className="mt-3 font-bold text-sm tracking-widest uppercase"></span>
        </Link>

        <Button as={Link} to={"/find"}>
          Find new Data
        </Button>

        <div className="pt-4 space-y-3">
          <Item />
        </div>
      </main>
    </div>
  );
};

export default Home;
