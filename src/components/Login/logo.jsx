const Logo = () => {
  return (
    <div className="bg-green h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row gap-4">
        <h1 className="text-4xl font-bold text-center">
          FARM <br /> TRADE
        </h1>
        <img src="carrot.png" alt="Logo.png" />
      </div>
      <p className="text-2xl letter-spacing">Farm Marketplace</p>
    </div>
  );
};

export default Logo;
