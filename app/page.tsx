'use client';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 gap-12 text-center">
      {/* Hero Section */}
      <section id="hero">
        <h1 className="text-4xl sm:text-6xl font-bold">NovaBots</h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-xl">
          Automatizăm web-ul pentru tine – bots, AI, scraping, tot ce vrei. Rapid și eficient.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800"
        >
          Contactează-ne
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Despre NovaBots</h2>
        <p className="text-gray-700">
          Suntem o echipă pasionată de automatizare și inteligență artificială. 
          Construim soluții personalizate pentru clienți care doresc să economisească timp și resurse prin tehnologii de ultimă generație. 
          Misiunea noastră este să transformăm procesele repetitive în automatizări eficiente care cresc productivitatea și reduc erorile.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full text-center">
        <h2 className="text-2xl font-semibold mb-6">Serviciile Noastre</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Automatizare Web</h3>
            <p className="text-gray-600">
              Automatizăm procesele web pentru a economisi timp și a reduce riscurile umane, creând soluții scalabile și eficiente.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Roboți AI</h3>
            <p className="text-gray-600">
              Dezvoltăm roboți inteligenți care pot lua decizii autonome pe baza datelor, aducând eficiență și viteză proceselor tale.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Web Scraping</h3>
            <p className="text-gray-600">
              Extragem date utile de pe web pentru a-ți furniza informații valoroase pentru deciziile de business sau cercetare.
            </p>
          </div>
        </div>
      </section>
      {/* Projects Section */}
<section id="projects" className="w-full text-center mt-12">
  <h2 className="text-2xl font-semibold mb-6">Proiecte Relevante</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2">Bot Automatizare Comenzi</h3>
      <p className="text-gray-600">
        Am dezvoltat un bot care automatizează plasarea comenzilor într-un sistem B2B, economisind zilnic peste 3 ore de muncă repetitivă.
      </p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2">Scraper Prețuri Produse</h3>
      <p className="text-gray-600">
        Am construit un sistem care extrage zilnic prețuri din peste 50 de magazine online pentru comparație și analiză de piață.
      </p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2">Roboți AI pentru TWS</h3>
      <p className="text-gray-600">
        Roboți care interacționează autonom cu platforme de trading pentru a executa strategii pe baza unor semnale definite.
      </p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2">Roboți pentru interactiune pe retelele de socializare</h3>
      <p className="text-gray-600">
        Roboți care interacționează autonom cu platforme de social media pentru a economisi timp in campaniile de marketing.
      </p>
    </div>
  </div>
</section>

      {/* Contact Section */}
<section id="contact" className="w-full max-w-2xl mx-auto mt-12">
  <h2 className="text-2xl font-semibold mb-6 text-center">Contact</h2>
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nume</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesaj</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
    >
      Trimite
    </button>
  </form>
</section>
    </main>
  );
}
