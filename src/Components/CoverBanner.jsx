

const CoverBanner = ({ title, desc, img }) => {
  return (
    <div
      className="hero h-[600px] my-7 bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-black bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-full bg-gray-400 bg-opacity-50 p-5">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CoverBanner;
