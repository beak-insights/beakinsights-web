import { Linkedin, Mail, Send } from 'lucide-react'; // Import icons

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Beak Insights</div>
          <div>
            <a href="#services" className="text-gray-600 hover:text-gray-800 px-3 py-2">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800 px-3 py-2">Projects</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 px-3 py-2">About</a>
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-4">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Beak Insights</h1>
          <p className="text-xl mb-8">Data, Development, and Design Agency</p>
          <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Data Analytics', 'Software Development', 'UX/UI Design'].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-600">
                  {index === 0 && "Transform your raw data into actionable insights with our advanced analytics solutions."}
                  {index === 1 && "Custom software solutions tailored to your unique business needs and challenges."}
                  {index === 2 && "Create intuitive and engaging user experiences that drive adoption and satisfaction."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Felicity LIMS', description: 'An open-source Laboratory Information Management System designed to streamline laboratory operations.', link: 'https://github.com/beak-insights/felicity-lims' },
              { name: 'Felicity ETL', description: 'A robust ETL (Extract, Transform, Load) tool for efficient data processing and integration.', link: 'https://github.com/beak-insights/felicity-etl' }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:underline">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Beak Insights</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Beak Insights is a data-driven agency specializing in transforming complex information into actionable insights. We combine expertise in data analytics, software development, and design to deliver innovative solutions that drive business growth and efficiency.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
          <div className="max-w-lg mx-auto text-center">
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Feel free to reach out through any of the following channels:
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a 
                href="https://www.linkedin.com/in/aurthurmusendame" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Linkedin className="mr-2" size={24} />:
                aurthurmusendame
              </a>
              <a 
                href="https://t.me/aurthurm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Send className="mr-2" size={24} />:
                aurthurm
              </a>
              <a 
                href="mailto:aurthurmusendame@gmail.com"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Mail className="mr-2" size={24} />:
                aurthurmusendame@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Beak Insights. All rights reserved.</p>
          <div className="mt-4">
            <a href="https://github.com/beak-insights/felicity-lims" className="text-gray-400 hover:text-white mx-2">GitHub</a>
            {/* <a href="#" className="text-gray-400 hover:text-white mx-2">Documentation</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;