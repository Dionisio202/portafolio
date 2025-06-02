import avatar from "../assets/img/edison.jpg";
import { FaUser } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section id="about" className="py-5 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 ">
        {/* Contenido de texto - ahora a la izquierda */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <FaUser className="w-5 h-5" /> About me
            </h2>
          </div>
          
          <div className="space-y-5 text-lg leading-relaxed ml-1.5">
            <p className="text-gray-700 dark:text-gray-400">
              I'm <span className="font-bold text-blue-600 dark:text-blue-400">Edison Ortiz</span>, 
              a passionate Software Engineer based in Ecuador. I specialize in developing 
              <span className="font-semibold"> RPA solutions</span>
              and creating scalable and efficient software.
            </p>
            
            <p className="text-gray-700 dark:text-gray-400">
              With extensive experience in{" "}
              <span className="inline-flex items-center gap-2 font-bold text-purple-600 dark:text-purple-400">
                Django, React, SQL Server ,  .NET Core , Larabel and Spring Boot
              </span>{" "}
              and modern web technologies, I aim to deliver robust solutions that make a real difference.
            </p>
            
            <p className="text-gray-700 dark:text-gray-400">
              I'm currently looking for opportunities to collaborate on impactful projects 
           
            </p>
          </div>

          {/* Badges de tecnologías */}
          <div className="flex flex-wrap gap-2 pt-4">
            {['Django', 'React', 'SQL Server','.NET Core' , 'Larabel','Spring Boot'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-200 dark:text-gray-100 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Imagen - rectángulo con esquinas muy redondeadas */}
        <div className="flex-shrink-0">
          <div className="relative group">
            {/* Efecto de fondo decorativo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 opacity-20 group-hover:opacity-30 transition-all duration-500 blur-xl rounded-3xl"></div>
            
            {/* Contenedor rectangular con esquinas muy redondeadas */}
            <div className="relative w-48 h-60 md:w-56 md:h-72 group-hover:scale-105 transition-all duration-500">
              {/* Marco decorativo con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl opacity-50"></div>
              
              {/* Contenedor principal de la imagen */}
              <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-500 transition-all duration-300 overflow-hidden">
                <img 
                  src={avatar} 
                  alt="Edison Ortiz - Software Engineer" 
                  className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay con gradiente elegante */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Brillo superior */}
                <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white/40 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
                
                {/* Efecto de borde interior */}
                <div className="absolute inset-0 rounded-3xl border border-white/20 dark:border-white/10"></div>
              </div>
              
            
              {/* Reflejo lateral */}
              <div className="absolute top-4 -left-1 w-1 h-12 bg-gradient-to-b from-blue-300/60 to-transparent rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;