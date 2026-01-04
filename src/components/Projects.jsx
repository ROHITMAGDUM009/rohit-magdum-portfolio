import invi from "../assets/invi.png";

const Projects = () => {
  return (
    <section className="px-10 md:px-20 mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Project 1 */}
        <div>
          <div className="bg-gray-200 p-5">
            <img
              src={invi}
              alt="Project Nodpod"
              className="w-full object-cover"
            />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-black">
            Nodpod
          </h3>

          <p className="mt-3 text-gray-600 leading-relaxed max-w-md">
            A website redesign for a beauty-focused sleepwear brand showcasing
            versatile products that utilize the science of deep touch pressure.
          </p>
        </div>

        {/* Project 2 */}
        <div>
          <div className="bg-gray-200 p-10">
            <img
              src="https://via.placeholder.com/800x500"
              alt="Project Odd Sox"
              className="w-full object-cover"
            />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-black">
            Odd Sox
          </h3>

          <p className="mt-3 text-gray-600 leading-relaxed max-w-md">
            A website redesign for a sock brand that specializes in selling
            unique designs featuring iconic shows, artists, and pop culture
            icons.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
