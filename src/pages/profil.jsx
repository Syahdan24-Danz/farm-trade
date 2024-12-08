import User from "../components/akun/user";
import Tools from "../components/akun/tools";
import Order from "../components/akun/order";
import Activity from "../components/akun/activity";
import Bantuan from "../components/akun/bantuan";
import Logout from "../components/akun/logout";

const Profil = () => {
  return (
    <div className="flex flex-col gap-2">
      <Tools />
      <User />
      <Order />
      <Activity />
      <Bantuan />
      <Logout />
    </div>
  );
};
export default Profil;
