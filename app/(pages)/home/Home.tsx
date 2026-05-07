import Hero from "./Hero";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 py-4">
      <Hero />
      <section className="w-full h-[30vh] bg-primary-color rounded-2xl"></section>
      <section className="w-full min-h-[100vh] rounded-2xl flex gap-4">
        <div className="w-[70vw] flex flex-col gap-4 top-0 sticky">
          <div className="h-[40vh] w-full bg-secondary-color rounded-2xl"></div>
          <div className="h-[60vh] w-full bg-secondary-color rounded-2xl"></div>
        </div>
        <div className="w-[30vw] flex flex-col gap-4">
          <div
            className="h-[102vh] w-full rounded-2xl"
            style={{
              backgroundImage:
                "url('https://static.wixstatic.com/media/88aac0_c5e833e79f6143b48abf8e8878247295~mv2.jpeg/v1/fit/w_2877,h_1468,q_90/88aac0_c5e833e79f6143b48abf8e8878247295~mv2.webp?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXSwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS84OGFhYzBfYzVlODMzZTc5ZjYxNDNiNDhhYmY4ZTg4NzgyNDcyOTV-bXYyLmpwZWcifV1dLCJpc3MiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwiZXhwIjoxNzgyODY0MDAwLCJqdGkiOiIxNzgyODY0MDAwIn0._fzNPVX8y67bYnCg71IE4tsSKw4POVqZaOjD56MLKvQ')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </section>
      <section className="w-full h-[30vh] bg-primary-color rounded-2xl"></section>
    </div>
  );
};

export default Home;
