import invi from "../assets/invi.png";

const getProjects = () => {
  return [
    {
      id: 1,
      name: "Nodpod",
      image: invi,
      description:
        "A website redesign for a beauty-focused sleepwear brand showcasing versatile products that utilize the science of deep touch pressure.",
    },
    {
      id: 2,
      name: "Nodpod",
      image: invi,
      description:
        "A website redesign for a beauty-focused sleepwear brand showcasing versatile products that utilize the science of deep touch pressure.",
    },
    {
      id: 3,
      name: "Nodpod",
      image: invi,
      description:
        "A website redesign for a beauty-focused sleepwear brand showcasing versatile products that utilize the science of deep touch pressure.",
    },
    {
      id: 4,
      name: "Nodpod",
      image: invi,
      description:
        "A website redesign for a beauty-focused sleepwear brand showcasing versatile products that utilize the science of deep touch pressure.",
    },
    {
      id: 5,
      name: "Nodpod",
      image: invi,
      description:
        "A website redesign for a beauty-focused sleepwear brand showcasing versatile products that utilize the science of deep touch pressure.",
    },
  ];
};

const Projects = () => {
  const projects = getProjects();

  return (
    <section className="px-10 md:px-20 mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="group cursor-pointer">
              <div
                className="bg-gray-200 dark:bg-gray-800
                           p-10 overflow-hidden
                           transition-transform duration-300
                           group-hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt="Project"
                  className="w-full object-cover
                             transition-transform duration-500
                             group-hover:scale-105"
                />
              </div>
            </div>

            <h3 className="mt-6 text-xl font-semibold
                           text-black dark:text-white">
              {project.name}
            </h3>

            <p className="mt-3 leading-relaxed max-w-md
                          text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
