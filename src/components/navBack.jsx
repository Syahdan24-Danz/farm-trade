import { useNavigate } from "react-router-dom";
const NavBack = ({ children, title }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="py-4 bg-[#3a6b30] justify-between flex flex-row px-4">
      <div className="flex flex-row items-center gap-4">
        <button onClick={handleBack} className="top-4 left-4">
          <img className="w-6" src="../panah.svg" alt="back" />
        </button>
        <h1 className="text-white text-lg">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default NavBack;
