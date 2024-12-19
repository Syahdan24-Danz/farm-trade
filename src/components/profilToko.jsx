import { Link } from "react-router-dom";

const ProfilToko = ({ link1 = "Kunjungi", className }) => {
    
  return (
    <div className={`${className} py-4 px-4 flex flex-row justify-between`}>
      <div className="flex flex-row gap-4 items-center">
        <div>
          <img className=" w-16 rounded-full" src="../pp-tani.png" alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl">PT Tani Raya</h1>
          <p className="text-sm">Aktif 3 Menit Lalu</p>
          <div className="flex flex-row text-xs gap-2">
            <div className="flex flex-row">
              <img className="w-4" src="../star.svg" alt="" />
              <p>4.9/5.0 </p>
            </div>
            <p>100 RB Pengikut</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <Link className="border border-[#3a6b30] p-2 rounded-xl">{link1}</Link>
        <Link className="border border-[#3a6b30] p-2 rounded-xl">Chat</Link>
      </div>
    </div>
  );
};

export default ProfilToko;
