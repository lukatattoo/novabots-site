// @/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 NovaBots. Toate drepturile rezervate.</p>
        <nav className="flex gap-6 mt-4 sm:mt-0 text-sm">
          <a href="#hero" className="hover:text-blue-400 transition-colors duration-200">Acasă</a>
          <a href="#services" className="hover:text-blue-400 transition-colors duration-200">Servicii</a>
          <a href="#about" className="hover:text-blue-400 transition-colors duration-200">Despre</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors duration-200">Proiecte</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors duration-200">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
