const Projects = ({ projects }) => {
  return (
    <section
      id="projects"
      className="w-full py-16 sm:py-24 bg-background-light"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12">
          <h1 className="text-charcoal text-4xl sm:text-5xl font-black tracking-tighter">
            {projects.title}
          </h1>
          <p className="text-charcoal/70 text-base sm:text-lg font-normal leading-relaxed">
            {projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col gap-3 rounded-xl bg-white shadow-subtle hover:shadow-lifted transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl"
                style={{
                  backgroundImage: `url("${project.image}")`,
                }}
              ></div>

              {/* Project Content */}
              <div className="p-6 pt-3 flex flex-col flex-grow">
                <h3 className="text-charcoal text-xl font-bold leading-normal">
                  {project.title}
                </h3>
                <p className="text-charcoal/70 text-sm font-normal leading-normal mt-1 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex items-center gap-4 mt-4 text-charcoal/60">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <a
                href={project.link}
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-xl flex items-center justify-center"
              >
                <span className="bg-white text-charcoal font-bold text-sm py-2 px-5 rounded-full">
                  View Project
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .shadow-subtle {
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
        }
        .shadow-lifted {
          box-shadow:
            0 10px 20px -5px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </section>
  );
};

export default Projects;
