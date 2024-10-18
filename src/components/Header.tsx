import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold flex items-center hover:text-accent transition-colors">
          <FontAwesomeIcon icon={faCar} className="mr-3 text-accent" />
          Ab Best Car
        </Link>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><Link href="#buy" className="hover:text-accent transition-colors">Buy</Link></li>
            <li><Link href="#sell" className="hover:text-accent transition-colors">Sell</Link></li>
            <li><Link href="#inventory" className="hover:text-accent transition-colors">Inventory</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;