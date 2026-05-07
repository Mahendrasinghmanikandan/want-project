const Hero = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center gap-x-10">
      <div
        className="w-1/2 h-full bg-green-500 rounded-2xl"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/88aac0_455abba1048c42ffb35e1d454f822fe8~mv2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-1/2 h-full bg-secondary-color rounded-2xl">c </div>
    </div>
  );
};

export default Hero;
