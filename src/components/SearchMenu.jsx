import { useEffect, useState } from "react";
import products from "../data/products";
import { filterProducts, sortProducts } from "../utils/searchUtils";
import Logo from "../assets/logo.png";

const SearchMenu = ({ activeTab }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [copiedCode, setCopiedCode] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    let result = [];

    if (searchTerm.trim() === "") {
      // If no search, show all by category
      if (activeTab === "recommended") {
        result = products.filter((p) => p.recommended);
      } else {
        result = products.filter((p) => p.category === activeTab);
      }
    } else {
      // If searching, filter by name or price
      result = filterProducts(products, searchTerm);
      if (result === "no-result") {
        setFilteredProducts([]);
        return;
      }

      if (activeTab === "recommended") {
        result = result.filter((p) => p.recommended);
      } else {
        result = result.filter((p) => p.category === activeTab);
      }
    }

    const sorted = sortProducts(result, sortOrder);
    setFilteredProducts(sorted);
  }, [searchTerm, sortOrder, activeTab]);

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setCopiedCode("");
    }, 2000);
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-950 text-gray-200">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold text-white">Shin Zushi Menu</h1>
        </div>

        {/* Search Box */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search name, code, or price..."
          className="w-full p-3 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 bg-gray-800 text-white"
        />

        {/* Sort and Result Count */}
        {filteredProducts.length > 0 && (
          <div className="flex justify-between items-center mb-4 text-sm">
            <p className="bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full shadow">
              {filteredProducts.length} result
              {filteredProducts.length > 1 ? "s" : ""}
            </p>
            <button
              onClick={toggleSortOrder}
              className="bg-blue-600 text-sm hover:bg-blue-700 text-white px-3 py-1 rounded-md transition"
            >
              Price : {sortOrder === "asc" ? "High to Low" : "Low to High"}
            </button>
          </div>
        )}

        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, idx) => (
            <li
              key={idx}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={`/images/${product.code}.jpg`}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  // onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
                />
              </div>

              <div className="p-4 space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <p className="text-lg font-bold text-white">{product.name}</p>
                  <button
                    onClick={() => handleCopy(product.code)}
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-md transition"
                  >
                    Copy
                  </button>
                </div>

                <p className="text-sm text-gray-400">{product.code}</p>
                <p className="text-blue-400 font-bold">RM {product.price}</p>
                <p className="text-sm text-gray-300">
                  {product.detail || "No detail"}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* No result found */}
        {filteredProducts.length === 0 && searchTerm && (
          <p className="text-center text-gray-400 mt-6">No results found.</p>
        )}
      </div>

      {/* Copy Alert */}
      {showAlert && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition-opacity duration-500">
          ✅ Code copied!
        </div>
      )}
    </div>
  );
};

export default SearchMenu;
