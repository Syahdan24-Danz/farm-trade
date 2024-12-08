import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 border-b border-gray-300 shadow-sm">
      <div className="flex flex-row items-center gap-2">
        <img className="w-20 rounded-full" src="user.png" alt="" />
        <div>
          <div className="flex flex-row justify-between items-center gap-2">
            <h1 className="text-2xl font-bold">Syahdan</h1>
            <img className="w-6" src="pencil.svg" alt="" />
          </div>
          <p className="text-sm">syahdanf860@gmail.com</p>
        </div>
        <Link to=""></Link>
      </div>
      <div>
        <Link to="">Mulai Jual</Link>
      </div>
    </div>
  );
};

export default User;
