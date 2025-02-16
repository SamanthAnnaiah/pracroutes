function Highlights({ himg, hname, hdesc }) {
  return (
    <div
      className="flex flex-col justify-center items-start gap-5
    rounded-lg bg-white shadow-lg w-1/3 p-2"
    >
      <div className="dv1 rounded-full p-3 relative top-[-40px] left-[20px]">
        <img src={himg} alt={hname} width={40} height={40} />
      </div>
      <h1 className="text-lg font-bold mt-[-20px]">{hname}</h1>
      <p className="text-gray-400 text-sm ppr">{hdesc}</p>
    </div>
  );
}

export default Highlights;
