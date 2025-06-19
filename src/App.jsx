import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        🍣 Sushi Code Finder
      </h1>
      <SearchBar />
    </div>
  );
}

export default App;
