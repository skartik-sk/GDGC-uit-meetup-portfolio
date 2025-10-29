const Hero = ({ personal }) => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-background-light"
    >
      {/* Animated Background Blobs */}
      <div className="absolute -top-1/4 -left-1/4 w-[50vw] h-[50vw] max-w-2xl max-h-2xl bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[50vw] h-[50vw] max-w-2xl max-h-2xl rounded-full blur-3xl opacity-30 animate-pulse"
        style={{
          backgroundColor: "#59C1CC33",
          animationDelay: "4s",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <main className="flex-grow">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 flex flex-1 items-center justify-center py-12 md:py-16">
            <div className="mx-auto max-w-7xl w-full">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                {/* Text Content */}
                <div className="flex flex-col gap-6 text-center lg:text-left">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-charcoal text-5xl font-black leading-tight tracking-tighter sm:text-6xl lg:text-7xl">
                      {personal.name}
                    </h1>
                    <h2 className="text-charcoal/80 text-lg font-medium leading-normal sm:text-xl">
                      {personal.title}
                    </h2>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <a
                      href="#projects"
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/20 transition-transform hover:scale-105"
                    >
                      <span className="truncate">View My Work</span>
                    </a>
                    <a
                      href="#contact"
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent text-charcoal ring-2 ring-neutral-light text-base font-bold leading-normal tracking-wide transition-all hover:bg-neutral-light/50 hover:ring-primary"
                    >
                      <span className="truncate">Get In Touch</span>
                    </a>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl opacity-50"></div>
                  <div
                    className="relative w-full max-w-md aspect-square bg-center bg-no-repeat bg-contain"
                    style={{
                      backgroundImage: `url("${personal.heroImage}")`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
