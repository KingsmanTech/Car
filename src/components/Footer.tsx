import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-accent">Ab Best Car</h3>
          <p className="text-gray-300">Your trusted partner in buying and selling quality vehicles.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-accent">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#buy" className="hover:text-accent transition-colors">Buy a Car</Link></li>
            <li><Link href="#sell" className="hover:text-accent transition-colors">Sell Your Car</Link></li>
            <li><Link href="#inventory" className="hover:text-accent transition-colors">Browse Inventory</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-accent">Connect With Us</h3>
          <p className="text-gray-300">123 Car Street, Automobile City, AC 12345</p>
          <p className="text-gray-300">Phone: (123) 456-7890</p>
          <p className="text-gray-300">Email: info@abbestcar.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 Ab Best Car. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;