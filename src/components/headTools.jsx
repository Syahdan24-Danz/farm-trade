import Tools from "./akun/tools";
import NavBack from "./navBack";

const HeaderTools = ({ title }) => {
  return (
    <NavBack title={title}>
      <Tools className={"filter invert brightness-0"} />
    </NavBack>
  );
};

export default HeaderTools;
