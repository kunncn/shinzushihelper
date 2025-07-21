export const filterProducts = (products, searchTerm) => {
  if (!searchTerm.trim()) return [];

  const searchWords = searchTerm.toLowerCase().split(" ");

  return products.filter((product) => {
    const productString = `${product.name} ${product.code} ${product.price} ${
      product.detail || ""
    }`.toLowerCase();
    const productWords = productString.split(/[\s,]+/);
    return searchWords.every((word) => productWords.includes(word));
  });
};

export const sortProducts = (products, order) => {
  return [...products].sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price
  );
};
