import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-deep-red text-gray-300 py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Dasoma Group</h3>
          <p className="text-sm leading-relaxed">
            A conglomerate of companies based in Addis Ababa, Ethiopia, with
            expertise in automotive, tourism, event organizing, mega projects,
            and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-deep-red transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/tourism" className="hover:text-deep-red transition">
                Tourism
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-deep-red transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-deep-red transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: info@dasomatrading.com</li>
            <li>Phone: +251-XXX-XXXXXX</li>
            <li>Address: Addis Ababa, Ethiopia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-deep-red mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Dasoma Group. All rights reserved.
      </div>
    </footer>
  );
}
