import { useRef } from "react";

const Testimonials = ({ testimonials }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -420,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 420,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="w-full py-16 sm:py-24 lg:py-32 bg-background-light"
    >
      <div className="w-full flex flex-1 justify-center">
        <div className="flex flex-col w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 md:mb-12">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-charcoal text-3xl sm:text-4xl font-bold tracking-tighter">
                {testimonials.title}
              </h2>
              <p className="text-charcoal/70 text-base sm:text-lg mt-2">
                {testimonials.subtitle}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={scrollLeft}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-neutral-light bg-white text-charcoal transition-colors hover:bg-neutral-light/60"
                aria-label="Previous testimonial"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button
                onClick={scrollRight}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-neutral-light bg-white text-charcoal transition-colors hover:bg-neutral-light/60"
                aria-label="Next testimonial"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 snap-x snap-mandatory"
          >
            <div className="flex items-stretch px-4 gap-6">
              {testimonials.items.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="relative flex w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px] flex-shrink-0 flex-col gap-4 rounded-xl bg-white p-6 md:p-8 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300 snap-center"
                >
                  <span className="material-symbols-outlined absolute top-6 left-6 text-5xl text-[#7c4dff]/20">
                    format_quote
                  </span>
                  <div className="flex flex-col flex-1 justify-between pt-10 gap-6">
                    <p className="text-charcoal text-lg font-medium leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        alt={`Headshot of ${testimonial.name}`}
                        className="h-12 w-12 rounded-full object-cover"
                        src={testimonial.image}
                      />
                      <div>
                        <p className="text-charcoal font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-charcoal/70 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
