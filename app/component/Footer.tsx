import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="mt-4 w-full rounded-2xl bg-primary-color px-6 py-8 text-white md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold uppercase">Wano Projects</h2>
          <p className="pt-2 leading-loose text-white/80">
            Structured building solutions from planning to handover, with a
            focus on engineering quality and responsible execution.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/90 transition-colors duration-300 hover:text-secondary-color"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6 border-t border-white/15 pt-4 text-sm text-white/70">
        © {new Date().getFullYear()} Wano Projects. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
