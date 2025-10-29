import { PRIMARY_COLOR } from "../config/theme";

const Skills = ({ skills }) => {
  // Convert hex to rgb for gradient
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgb = hexToRgb(PRIMARY_COLOR);
  const primaryRgb = rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : "9, 58, 62";

  return (
    <section id="skills" className="w-full py-16 sm:py-20 bg-background-light">
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col w-full max-w-[960px] flex-1">
          {/* Section Header */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex w-full flex-col gap-3 text-center">
              <p className="text-charcoal text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                {skills.title}
              </p>
              <p className="text-charcoal/60 text-base sm:text-lg font-normal leading-normal max-w-2xl mx-auto">
                {skills.subtitle}
              </p>
            </div>
          </div>

          {/* Skills Categories */}
          {skills.categories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-charcoal text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5">
                {category.name}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative flex flex-col flex-1 items-center justify-center gap-4 rounded-xl border border-transparent p-6 text-center transition-all duration-300 hover:shadow-molten hover:-translate-y-1.5 overflow-hidden cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, rgb(${primaryRgb}), rgba(${primaryRgb}, 0.8), rgba(${primaryRgb}, 0.6))`,
                    }}
                  >
                    <div className="text-5xl text-white transition-transform duration-300 group-hover:scale-110">
                      <span className="material-symbols-outlined">
                        {skill.icon}
                      </span>
                    </div>
                    <h2 className="text-white text-base font-bold leading-tight">
                      {skill.name}
                    </h2>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <style jsx>{`
        .shadow-molten {
          box-shadow:
            0 10px 15px -3px rgba(${primaryRgb}, 0.2),
            0 4px 6px -4px rgba(${primaryRgb}, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Skills;
