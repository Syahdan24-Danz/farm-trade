const menuActivity = [
  {
    id: 1,
    title: "Favorit Saya",
    img: "love.svg",
  },
  {
    id: 2,
    title: "Terakhir Dilihat",
    img: "clock.svg",
  },
  {
    id: 3,
    title: "Laporan Transaksi Bulanan",
    img: "money-bag.svg",
  },
];

const Activity = () => {
  return (
    <div className="p-4 border-b border-gray-300">
      <h1 className="text-2xl font-bold mb-4 ">Aktivitas Saya</h1>
      <div className="grid grid-cols-2 gap-2">
        {menuActivity.map((item) => (
          <div
            key={item.id}
            className="w-full p-4 gap-2 flex items-center justify-center bg-[#eef8f2] border border-[#3a6b30] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img className="w-8" src={item.img} alt={item.title} />
            <h2 className="text-lg font-semibold text-[#3a6b30]">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
