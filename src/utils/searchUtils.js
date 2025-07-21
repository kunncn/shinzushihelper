export const sortProducts = (products, order) => {
  return [...products].sort((a, b) =>
    order === "asc"
      ? Number(a.price) - Number(b.price)
      : Number(b.price) - Number(a.price)
  );
};

export const filterProducts = (products, searchTerm) => {
  if (!searchTerm.trim()) return [];

  const searchWords = searchTerm.toLowerCase().split(" ");

  return products.filter((product) => {
    const productString = `${product.name} ${product.code} ${product.price} ${
      product.detail || ""
    }`.toLowerCase();
    const productWords = productString.split(/[\s,]+/);

    return searchWords.every((word) => {
      if (!isNaN(word)) {
        // If the word is a number, compare with price
        return parseFloat(product.price) <= parseFloat(word);
      }
      return productWords.includes(word);
    });
  });
};
