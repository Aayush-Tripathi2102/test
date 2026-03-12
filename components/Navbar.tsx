const links = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
      <h1 className="font-bold text-xl">MySite</h1>

      <div className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-600 hover:text-black"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
