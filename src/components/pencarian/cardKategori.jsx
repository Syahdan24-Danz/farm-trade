const CardCategory = ({ id, img, title }) => {
  return (
    <div
      key={id}
      className="flex flex-col p-4 gap-4 justify-center items-center bg-[#eef8f2] border border-[#3a6b30] rounded-2xl"
    >
      <img className="bg-cover" src={img} alt="" />
      <h1>{title}</h1>
    </div>
  );
};

export default CardCategory;
