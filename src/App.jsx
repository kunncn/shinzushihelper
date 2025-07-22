import { useState, useEffect } from "react";
import { Search, Copy } from "lucide-react"; // Importing icons from lucide-react
import products from "./data/products";
import Logo from "./assets/logo.png";
import SearchMenu from "./components/SearchMenu";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Product data with codes, prices, and details extracted directly from the provided menu PDF

// Main App component
const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search input
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products
  const [copyStatus, setCopyStatus] = useState(""); // State to show copy feedback
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"
  const [activeTab, setActiveTab] = useState("recommended");
  const categories = [
    "recommended",
    "rice-soup",
    "maki",
    "noodles",
    "set-meal",
    "donburi",
    "teppanyaki",
    "grilled-dishes",
    "sushi-moriawase",
    "gunkan-inari",
    "aburi-sushi",
    "nigiri-zushi",
    "sashimi-moriawase",
    "sashimi",
    "hand-rolled",
    "salad",
    "appetizer",
  ]; // Add your own

  <ul className="flex gap-2 flex-wrap mb-4">
    {categories.map((cat) => (
      <li key={cat}>
        <button
          onClick={() => setActiveTab(cat)}
          className={`px-3 py-1 rounded-md capitalize ${
            activeTab === cat
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {cat.replace("-", " ")}
        </button>
      </li>
    ))}
  </ul>;

  // filter function
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const searchWords = searchTerm.toLowerCase().split(" ");
      const isAllNumbers = searchWords.every((w) => !isNaN(Number(w)));

      let results = products.filter((product) => {
        if (isAllNumbers) {
          return searchWords.some((num) => product.price <= Number(num));
        } else {
          const nameWords = product.name.toLowerCase().split(/\s+/);
          return searchWords.every((word) => nameWords.includes(word));
        }
      });

      if (isAllNumbers) {
        results.sort((a, b) =>
          sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );
      }

      setFilteredProducts(results);
    } else {
      // Tab filter when no search term
      const filtered =
        activeTab === "recommended"
          ? products.filter((p) => p.recommended)
          : products.filter((p) => p.category === activeTab);
      console.log(filtered);

      setFilteredProducts(filtered);
    }
  }, [searchTerm, sortOrder, activeTab]);

  // copy function
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
      setTimeout(() => setCopyStatus(""), 3000); // Clear message after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopyStatus("Failed to copy."); // Set error message
      setTimeout(() => setCopyStatus(""), 3000); // Clear message after 2 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-6 sm:px-6 md:px-8">
      <ul className="flex gap-2 flex-wrap mb-4">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1 rounded-md capitalize ${
                activeTab === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {cat.replace("-", " ")}
            </button>
          </li>
        ))}
      </ul>
      <SearchMenu activeTab={activeTab} />

      <ScrollToTopButton />
    </div>
  );
};

export default App;
