// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-textLight mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Dasoma Trading</h3>
          <p className="text-gray-400">
            Building Ethiopia’s future through automotive, mega projects, and digital tourism.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About</a></li>
            <li><a href="/divisions" className="hover:text-red-500 transition">Divisions</a></li>
            <li><a href="/projects" className="hover:text-red-500 transition">Projects</a></li>
            <li><a href="/digital-tourism" className="hover:text-red-500 transition">Digital Tourism</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-400">Addis Ababa, Ethiopia</p>
          <p className="text-gray-400">Email: info@dasomaTrading.com</p>
          <p className="text-gray-400">Phone: +251 11 123 4567</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-red-500 transition">FB</a>
            <a href="#" className="hover:text-red-500 transition">TW</a>
            <a href="#" className="hover:text-red-500 transition">LI</a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-500 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Dasoma Trading. All rights reserved.
      </div>
    </footer>
  );
}
