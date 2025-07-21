import { Copy } from "lucide-react";

const ProductItem = ({ product, onCopy }) => (
  <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 hover:bg-gray-700 transition duration-200 group">
    <div className="flex-1">
      <h2 className="font-semibold text-white text-base sm:text-lg">
        {product.name}
      </h2>
      <p className="text-gray-400 text-sm">
        Code: <span className="font-mono text-blue-400">{product.code}</span>
      </p>
      <p className="text-gray-400 text-sm">
        Price:{" "}
        <span className="font-mono text-green-400">RM {product.price}</span>
      </p>
      <p className="text-gray-500 text-xs italic">{product.detail}</p>
    </div>

    <button
      onClick={() => onCopy(product.code)}
      aria-label={`Copy code ${product.code}`}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-x-4 sm:group-hover:translate-x-0"
    >
      <Copy size={16} />
      Copy
    </button>
  </li>
);

export default ProductItem;
