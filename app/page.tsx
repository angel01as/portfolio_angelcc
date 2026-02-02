import { Mail, FileText, Github, Linkedin } from 'lucide-react'; // Instala lucide-react si quieres iconos

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* HEADER */}
      <header className="w-full bg-slate-900/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LADO IZQUIERDO: FOTO + NOMBRE */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full overflow-hidden border border-slate-700">
              {/* Coloca tu foto en /public/avatar.jpg o cambia el src */}
              <img src="/imagen_perfil" alt="Ángel Caravaca Contreras" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold">Ángel Caravaca Contreras</p>
              <p className="text-slate-400 text-sm">Software Developer</p>
            </div>
          </div>

          {/* LADO DERECHO: MENÚ */}
          <nav className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre mí</a>
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#certificaciones" className="hover:text-white transition-colors">Certificaciones</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      <div className="p-8 md:p-24">
      {/* SECCIÓN HERO */}
      <section id="inicio" className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
          Hola, soy Ángelito el diablito
        </h1>
        <p className="text-xl text-slate-400 mb-10">
          Desarrollador Full Stack enfocado en crear experiencias digitales modernas.
        </p>
        
        <div className="flex justify-center gap-4">
          {/* BOTÓN DESCARGAR CV */}
          <a 
            href="/CV_%C3%81ngel_Caravaca.pdf" 
            download 
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all"
          >
            <FileText size={20} /> Descargar CV
          </a>
          <a 
            href="#contacto" 
            className="flex items-center gap-2 border border-slate-700 px-6 py-3 rounded-full font-semibold hover:border-blue-400 transition-all"
          >
            <Mail size={20} /> Contactar
          </a>
        </div>
      </section>

      {/* SECCIÓN PROYECTOS (EJEMPLO) */}
      <section id="proyectos" className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-800 pb-2">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition-colors">
            <h3 className="text-xl font-bold mb-2">Mi Portfolio</h3>
            <p className="text-slate-400">Creado con Next.js 14, Tailwind y Nodemailer.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Enviame un mensaje</h2>
        {/* Aquí irá nuestro componente de formulario */}
      </section>
      </div>
    </main>
  );
}
