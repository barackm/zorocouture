import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">Tailoring Portfolio</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;