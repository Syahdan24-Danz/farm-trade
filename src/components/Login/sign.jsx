const Sign = () => {
  return (
    <div className="text-black bg-[#fcfcfc]">
      <div>
        <img src="sayur.png" alt="" />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">
          Get your groceries <br />
          with farm trade
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-row">
            <label>Nomor Telepon:</label>
            <input
            className="w-full"
              type="tel"
              id="phone"
              name="phone"
              placeholder="+62"
              required
            />
          </div>
          <p className="text-center">Atau terhubung dengan media sosial</p>
          <div className="flex flex-col gap-2">
            <button className="btn">Lanjut dengan Google</button>
            <button className="btn">Daftar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
