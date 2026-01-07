const Hero = () => {
  return (
    <section
      id="home"
      className="px-10 md:px-20 mt-24"
    >
      <h1 className="text-5xl md:text-6xl font-bold
                     text-black dark:text-white">
        Hi, I'm Rohit Magdum.
      </h1>

      <p className="mt-6 max-w-2xl leading-relaxed
                    text-gray-600 dark:text-gray-400">
        Java & React Full-Stack Developer. Currently, I'm based in
        the Pune City Area, Building scalable web applications with Spring Boot and React
        as{" "}
        <span className="font-semibold text-black dark:text-white">
          Freelancer
        </span>.
      </p>
    </section>
  );
};

export default Hero;
