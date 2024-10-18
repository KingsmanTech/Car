import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface CarListingProps {
  id: number;
  model: string;
  year: number;
  mileage: number;
  price: number;
  imageUrl: string;
}

const CarListing = ({ id, model, year, mileage, price, imageUrl }: CarListingProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={model} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{model}</h3>
        <p className="text-gray-600 mb-4">Year: {year} | Mileage: {mileage.toLocaleString()} | Price: ${price.toLocaleString()}</p>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarListing;