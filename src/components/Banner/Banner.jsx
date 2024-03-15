const Banner = () => {
  return (
    <div>
      <div >
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/0QjKy7D/25325-1.jpg)",
              
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-[800px] ">
              <h1 className="mb-7 leading-10 text-2xl md:text-5xl font-bold text-[#FFFFFF]">About Simply Recipes</h1>
              <p className="mb-7 leading-8">
              Simply Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.
              </p>
              
              <div>
              <button className="btn bg-green-500 rounded-full text-black mr-4">Get Started</button>
              <button className="btn glass rounded-full text-white">Our Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
