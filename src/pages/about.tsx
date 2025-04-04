import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const AboutPage = () => {
  return (
    <main className="w-full min-h-screen bg-black text-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop" 
                alt="Photographer" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Alex Morgan</h2>
              <p className="text-gray-300">
                I am a photographer based in New York City, specializing in architectural, urban, and abstract photography. 
                With over 10 years of experience, my work explores the intersection of light, form, and human experience.
              </p>
              <p className="text-gray-300">
                My photographs have been featured in various exhibitions and publications, including Architectural Digest, 
                Vogue, and The New York Times. I strive to capture the essence of spaces and moments that often go unnoticed 
                in our daily lives.
              </p>
              <p className="text-gray-300">
                When I'm not behind the camera, I teach photography workshops and mentor emerging photographers. 
                I believe in the power of visual storytelling to connect people and create meaningful dialogue.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-20 space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Experience</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-gray-800 pl-6 py-2">
                <h3 className="text-xl font-semibold">Lead Photographer</h3>
                <p className="text-gray-400">Urban Spaces Magazine • 2018 - Present</p>
                <p className="text-gray-300 mt-2">
                  Producing monthly photo essays exploring urban architecture and design across major cities.
                </p>
              </div>
              
              <div className="border-l-2 border-gray-800 pl-6 py-2">
                <h3 className="text-xl font-semibold">Exhibition: "Concrete Perspectives"</h3>
                <p className="text-gray-400">MoMA • 2020</p>
                <p className="text-gray-300 mt-2">
                  Solo exhibition featuring 30 large-format photographs examining brutalist architecture.
                </p>
              </div>
              
              <div className="border-l-2 border-gray-800 pl-6 py-2">
                <h3 className="text-xl font-semibold">Photography Instructor</h3>
                <p className="text-gray-400">New York School of Visual Arts • 2016 - Present</p>
                <p className="text-gray-300 mt-2">
                  Teaching advanced courses in architectural photography and post-processing techniques.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Equipment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Cameras</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Canon EOS R5</li>
                  <li>• Leica Q2</li>
                  <li>• Hasselblad X1D II 50C</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Lenses</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Canon RF 15-35mm f/2.8L</li>
                  <li>• Canon RF 50mm f/1.2L</li>
                  <li>• Canon RF 70-200mm f/2.8L</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Accessories</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Gitzo Traveler Carbon Fiber Tripod</li>
                  <li>• Profoto B10 Plus Lights</li>
                  <li>• DJI Mavic 3 Pro Drone</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default AboutPage;