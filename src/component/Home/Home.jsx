import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaTools, FaServer, FaCloud } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-white text-gray-800 px-6 py-12 gap-10"
      >
        
        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 animate-fade-in">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="max-w-xl text-center md:text-left animate-fade-in delay-200">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500 font-fira">DevOps Engineer</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            I automate infrastructure, build CI/CD pipelines, and deploy scalable applications to the cloud.
          </p>

          
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a href="https://github.com/fathankep0" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-500 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sholihin-sholihin-97b222214/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="#contact" className="text-2xl text-gray-600 hover:text-blue-500 transition">
              <FaEnvelope />
            </a>
          </div>

          
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
