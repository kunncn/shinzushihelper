import { useState } from "react";
import { dishes } from "../data/dishes";
import { Check, Copy } from "lucide-react"; // install lucide-react for icons

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState("");

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <input
        type="text"
        placeholder="Search for a dish..."
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 shadow mb-6 text-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="space-y-4">
        {filteredDishes.map((dish) => (
          <div
            key={dish.code}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-gray-800 font-semibold capitalize text-lg">
              {dish.name}
            </div>
            <button
              onClick={() => handleCopy(dish.code)}
              className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-blue-700 transition"
            >
              {copiedCode === dish.code ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  {dish.code}
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
