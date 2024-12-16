const PageTitle = ({ title }) => {
  return (
    <div className="border-b h-1/6 w-full border-gray-300 flex flex-row justify-center py-6 items-center">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
    </div>
  );
};

export default PageTitle;
