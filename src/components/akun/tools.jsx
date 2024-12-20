import { Link } from "react-router-dom";

const Tools = ({ className }) => {
  return (
    <div className="flex flex-row justify-end items-center gap-4 p-2 h-1/10">
      <Link to="/tools">
        <img className={`w-6 ${className}`} src="settings.svg" alt="" />
      </Link>
      <Link to="/tools">
        <img className={`w-6 ${className}`} src="bell.svg" alt="" />
      </Link>
      <Link to="/tools">
        <img className={`w-6 ${className}`} src="chat.svg" alt="" />
      </Link>
    </div>
  );
};

export default Tools;
