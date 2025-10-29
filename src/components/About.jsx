const About = ({ personal }) => {
  return (
    <section id="about" className="w-full py-16 sm:py-24 bg-background-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Profile Image */}
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
              {/* Animated background blob */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background:
                    "linear-gradient(135deg, #093A3E, #106066, #12B8D3)",
                  animation: "molten-flow 20s ease-in-out infinite",
                }}
              ></div>
              {/* Profile Image */}
              <div
                className="absolute inset-2 sm:inset-4 rounded-full bg-center bg-no-repeat aspect-square bg-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${personal.image}")`,
                }}
              ></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-7 flex flex-col gap-6 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <p className="text-primary font-bold text-sm uppercase tracking-widest">
                About Me
              </p>
              <h1 className="text-charcoal text-4xl sm:text-5xl font-black tracking-tighter">
                {personal.name}
              </h1>
              <h2 className="text-primary text-xl sm:text-2xl font-medium">
                {personal.title}
              </h2>
            </div>

            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed">
              {personal.bio}
            </p>

            {/* Info Pills */}
            <div className="flex flex-col sm:flex-row gap-6 pt-2 justify-center md:justify-start">
              <div className="flex items-center gap-2 justify-center">
                <span className="material-symbols-outlined text-xl text-primary">
                  business_center
                </span>
                <span className="text-sm font-medium text-charcoal/70">
                  {personal.yearsOfExperience} Years of Experience
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="material-symbols-outlined text-xl text-primary">
                  location_on
                </span>
                <span className="text-sm font-medium text-charcoal/70">
                  Based in {personal.location}
                </span>
              </div>
            </div>

            {/* Resume Button */}
            <div className="pt-4 flex justify-center md:justify-start">
              <button className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="truncate">View Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes molten-flow {
          0% {
            transform: scale(1) translate(0px, 0px) rotate(0deg);
            border-radius: 49% 51% 70% 30% / 30% 45% 55% 70%;
          }
          25% {
            transform: scale(1.1) translate(20px, -10px) rotate(45deg);
            border-radius: 58% 42% 45% 55% / 48% 40% 60% 52%;
          }
          50% {
            transform: scale(1) translate(-10px, 10px) rotate(90deg);
            border-radius: 33% 67% 58% 42% / 55% 30% 70% 45%;
          }
          75% {
            transform: scale(1.1) translate(-20px, -5px) rotate(135deg);
            border-radius: 45% 55% 33% 67% / 40% 58% 42% 60%;
          }
          100% {
            transform: scale(1) translate(0px, 0px) rotate(180deg);
            border-radius: 49% 51% 70% 30% / 30% 45% 55% 70%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
