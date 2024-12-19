import { useNavigate } from "react-router-dom";

const BackToggle = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Menggunakan navigate untuk kembali ke halaman sebelumnya
  };
  return (
    <button
      onClick={handleBack}
      className="hover:bg-gray-700 rounded-full absolute top-4 left-4"
    >
      <img className="w-8" src="../back.svg" alt="back" />
    </button>
  );
};

export default BackToggle;
