import invi from "../assets/invi.png";

/**
 * Project data function
 * You can later move this to a separate file if needed
 */
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
      id: 1,
      name: "Nodpod",
      image: invi,
      description:
        "A website redesign for a beauty-focused sleepwear brand showcasing versatile products that utilize the science of deep touch pressure.",
    },{
      id: 1,
      name: "Nodpod",
      image: invi,
      description:
        "A website redesign for a beauty-focused sleepwear brand showcasing versatile products that utilize the science of deep touch pressure.",
    },{
      id: 1,
      name: "Nodpod",
      image: invi,
      description:
        "A website redesign for a beauty-focused sleepwear brand showcasing versatile products that utilize the science of deep touch pressure.",
    },{
      id: 1,
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
            <div className="bg-gray-200 p-5">
              <img
                src={project.image}
                alt={project.name}
                className="w-full object-cover"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-black">
              {project.name}
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed max-w-md">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
