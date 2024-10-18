import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarListing from '../components/CarListing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDollarSign, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const carListings = [
  { id: 1, model: "Sedan X", year: 2023, mileage: 15000, price: 25000, imageUrl: "https://via.placeholder.com/300x200.png?text=Sedan+X" },
  { id: 2, model: "SUV Y", year: 2022, mileage: 20000, price: 35000, imageUrl: "https://via.placeholder.com/300x200.png?text=SUV+Y" },
  { id: 3, model: "Hatchback Z", year: 2023, mileage: 10000, price: 22000, imageUrl: "https://via.placeholder.com/300x200.png?text=Hatchback+Z" },
  { id: 4, model: "Coupe A", year: 2021, mileage: 25000, price: 28000, imageUrl: "https://via.placeholder.com/300x200.png?text=Coupe+A" },
  { id: 5, model: "Truck B", year: 2022, mileage: 18000, price: 40000, imageUrl: "https://via.placeholder.com/300x200.png?text=Truck+B" },
  { id: 6, model: "Van C", year: 2023, mileage: 12000, price: 32000, imageUrl: "https://via.placeholder.com/300x200.png?text=Van+C" },
];

export default function Home() {
  const [sellFormSubmitted, setSellFormSubmitted] = useState(false);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  const handleSellFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSellFormSubmitted(true);
    setTimeout(() => setSellFormSubmitted(false), 3000);
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormSubmitted(true);
    setTimeout(() => setContactFormSubmitted(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Ab Best Car - Your Trusted Car Marketplace</title>
        <meta name="description" content="Ab Best Car - Your one-stop destination for buying and selling quality vehicles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4">Welcome to Ab Best Car</h1>
              <p className="text-xl mb-8">Your one-stop destination for buying and selling quality vehicles</p>
              <button className="bg-accent text-primary hover:bg-yellow-300 font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </section>

          <section id="buy" className="py-16 bg-green-100">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Buy Your Dream Car</h2>
              <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <select className="w-full p-2 border rounded" id="make">
                    <option value="">Select Make</option>
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="ford">Ford</option>
                  </select>
                  <select className="w-full p-2 border rounded" id="model">
                    <option value="">Select Model</option>
                    <option value="camry">Camry</option>
                    <option value="civic">Civic</option>
                    <option value="mustang">Mustang</option>
                  </select>
                  <select className="w-full p-2 border rounded" id="year">
                    <option value="">Select Year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
                <div className="flex">
                  <input type="text" placeholder="Enter keywords..." className="flex-grow p-2 border rounded-l" />
                  <button className="bg-green-600 text-white px-4 py-2 rounded-r hover:bg-green-700">
                    <FontAwesomeIcon icon={faSearch} className="mr-2" />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="sell" className="py-16 bg-orange-100">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-orange-800">Sell Your Car</h2>
              <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <form id="sellForm" className="space-y-4" onSubmit={handleSellFormSubmit}>
                  <input type="text" placeholder="Car Make" className="w-full p-2 border rounded" required />
                  <input type="text" placeholder="Car Model" className="w-full p-2 border rounded" required />
                  <input type="number" placeholder="Year" className="w-full p-2 border rounded" required />
                  <input type="number" placeholder="Mileage" className="w-full p-2 border rounded" required />
                  <input type="number" placeholder="Asking Price" className="w-full p-2 border rounded" required />
                  <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                    List Your Car
                  </button>
                </form>
                {sellFormSubmitted && (
                  <p className="mt-4 text-green-600 font-semibold">Your car listing has been submitted successfully!</p>
                )}
              </div>
            </div>
          </section>

          <section id="inventory" className="py-16 bg-blue-100">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Inventory</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {carListings.map((car) => (
                  <CarListing key={car.id} {...car} />
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-16 bg-red-100">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-red-800">Contact Us</h2>
              <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <form id="contactForm" className="space-y-4" onSubmit={handleContactFormSubmit}>
                  <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
                  <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
                  <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" required />
                  <textarea rows={4} placeholder="Your Message" className="w-full p-2 border rounded" required></textarea>
                  <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                    <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                    Send Message
                  </button>
                </form>
                {contactFormSubmitted && (
                  <p className="mt-4 text-green-600 font-semibold">Your message has been sent successfully!</p>
                )}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}