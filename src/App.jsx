import { useState, useEffect } from "react";
import { Search, Copy } from "lucide-react"; // Importing icons from lucide-react
import products from "./data/products";
import Logo from "./assets/logo.png";

// Product data with codes, prices, and details extracted directly from the provided menu PDF

// Main App component
const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search input
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products
  const [copyStatus, setCopyStatus] = useState(""); // State to show copy feedback

  // Effect to filter products whenever the search term changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]); // Clear results if search bar is empty
      return;
    }

    // Filter products based on whether their name includes the search term (case-insensitive)
    const results = products.filter((product) =>
      `${product.name} ${product.code} ${product.price} ${product.detail}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  // Function to copy the product code to the clipboard
  const copyToClipboard = (code) => {
    try {
      // Create a temporary input element to hold the text
      const tempInput = document.createElement("input");
      tempInput.value = code;
      document.body.appendChild(tempInput); // Append to body
      tempInput.select(); // Select the text
      document.execCommand("copy"); // Execute copy command
      document.body.removeChild(tempInput); // Remove the temporary input

      setCopyStatus(`'${code}' copied!`); // Set success message
      setTimeout(() => setCopyStatus(""), 2000); // Clear message after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopyStatus("Failed to copy."); // Set error message
      setTimeout(() => setCopyStatus(""), 2000); // Clear message after 2 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4 sm:p-6 md:p-8 font-inter">
      <div className="bg-gray-900 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 text-center flex items-center justify-center gap-2">
          <img src={Logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          Shin Zushi Code Finder
        </h1>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search for sushi, sashimi, or dish..."
            className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Copy Status Message */}
        {copyStatus && (
          <div className="mb-4 p-3 bg-green-800 text-green-300 rounded-lg text-center font-medium shadow-sm text-sm">
            {copyStatus}
          </div>
        )}

        {/* Search Results */}
        <div className="max-h-80 overflow-y-auto custom-scrollbar pr-2">
          {filteredProducts.length > 0 ? (
            <ul className="space-y-3">
              {filteredProducts.map((product) => (
                <li
                  key={product.name + product.code}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 hover:bg-gray-700 transition duration-200 group"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-white text-base sm:text-lg">
                      {product.name}
                    </span>
                    <span className="text-gray-400 text-sm">
                      Code:{" "}
                      <span className="font-mono text-blue-400">
                        {product.code}
                      </span>
                    </span>
                    <span className="text-gray-400 text-sm">
                      Price:{" "}
                      <span className="font-mono text-green-400">
                        RM {product.price}
                      </span>
                    </span>
                    <span className="text-gray-500 text-xs italic">
                      {product.detail}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(product.code)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-x-4 sm:group-hover:translate-x-0"
                  >
                    <Copy size={16} />
                    Copy
                  </button>
                </li>
              ))}
            </ul>
          ) : searchTerm.trim() !== "" ? (
            <p className="text-center text-gray-400 py-6">
              No products found matching "{searchTerm}".
            </p>
          ) : (
            <p className="text-center text-gray-400 py-6">
              Start typing to search for products!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
