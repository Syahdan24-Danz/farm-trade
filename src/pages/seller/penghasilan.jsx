import NavBack from "../../components/navBack";

const Penghasilan = () => {
  return (
    <div className="w-full min-h-screen px-4">
      <NavBack title={"Keuangan Saya"}></NavBack>
      <div>
        <h1>Total Saldo</h1>
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-3xl text-[#3a6b30]">Rp. 5.000.000</h1>
          <button>Tarik Dana</button>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img className="w-8" src="../wallet.svg" alt="" />
          <h1>Penghasilan Saya</h1>
        </div>
      </div>
    </div>
  );
};

export default Penghasilan;
