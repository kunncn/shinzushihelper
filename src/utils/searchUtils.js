export const sortProducts = (products, order) => {
  return [...products].sort((a, b) =>
    order === "asc"
      ? Number(a.price) - Number(b.price)
      : Number(b.price) - Number(a.price)
  );
};

export const filterProducts = (products, searchTerm) => {
  const trimmed = searchTerm.trim();

  if (!trimmed) {
    // If nothing is typed, return recommended foods
    return products.filter((product) => product.recommended === true);
  }

  const searchWords = trimmed.toLowerCase().split(" ");

  const filtered = products.filter((product) => {
    const productString = `${product.name} ${product.code} ${product.price} ${
      product.detail || ""
    }`.toLowerCase();
    const productWords = productString.split(/[\s,]+/);

    return searchWords.every((word) => {
      if (!isNaN(word)) {
        return parseFloat(product.price) <= parseFloat(word);
      }
      return productWords.includes(word);
    });
  });

  // If no match found
  return filtered.length ? filtered : "no-result";
};

export const getRecommendedFoods = (products) => {
  return products.filter((product) => product.recommended === true);
};
