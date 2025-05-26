import DefaultLayout from "../layouts/DefaultLayout";
import Badge from "../components/Badge"; // Importa tu componente azul
import avatar from "../assets/img/edison.jpg";

import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import ProjectList from "../components/ProjectList";

const Home = () => {
  return (
    <DefaultLayout>
      <section className="px-8 py-20 max-w-3xl mx-auto text-left">
        <div className="flex items-center gap-4 mb-6">
          <img src={avatar} alt="Edison" className="w-16 h-16 rounded-full" />
          <Badge>Available for hire</Badge>
        </div>

        <h1 className="text-4xl font-bold mb-4">Hey, I'm Edison</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          I'm a Fullstack Software Engineer based in Ecuador. I specialize in RPA development, process automation, and creating scalable, efficient systems to solve real-world problems.
        </p>

        {/* Badges de contacto */}
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:solisedison@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FiMail /> solisedison@outlook.com
          </a>
          <a
            href="https://www.linkedin.com/in/edison-ortiz-71ab41280/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/Dionisio202"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FiGithub /> GitHub
          </a>
        </div>
        {/* 💻 Sección de proyectos */}
        <ProjectList />
      </section>
    </DefaultLayout>
  );
};

export default Home;
