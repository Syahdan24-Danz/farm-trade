const FirstScreen = () => {
  return (
    <div className="h-screen flex justify-center items-end bg-[url('bapakSayur.png')] bg-cover">
      <div className="flex flex-col items-center justify-end text-center mb-16 gap-2">
        <img src="carrot.png" alt="" />
        <h1 className="text-4xl font-bold">
          Welcome <br /> to Our Farm Market
        </h1>
        <p>Get your groceries in as fast as one hour</p>
        <button className="btn mt-4 hover:bg-[#3a6b30] w-full">Mulai</button>
      </div>
    </div>
  );
};

export default FirstScreen;
