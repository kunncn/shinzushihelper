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

  // filter function
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
      return;
    }

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

    // if number search, sort results
    if (isAllNumbers) {
      results.sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredProducts(results);
  }, [searchTerm, sortOrder]);

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
      setTimeout(() => setCopyStatus(""), 2000); // Clear message after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopyStatus("Failed to copy."); // Set error message
      setTimeout(() => setCopyStatus(""), 2000); // Clear message after 2 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-6 sm:px-6 md:px-8">
      <SearchMenu />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
