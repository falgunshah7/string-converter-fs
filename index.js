function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function kebabCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+/g, "-") // Replace non-alphanumerics with -
    .replace(/-+/g, "-") // Replace multiple dashes with one
    .replace(/^-|-$/g, "") // Trim dashes from start/end
    .toLowerCase();
}

function snakeCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+/g, "_") // Replace non-alphanumerics with _
    .replace(/_+/g, "_") // Replace multiple underscores with one
    .replace(/^_+|_+$/g, "") // Trim underscores from start/end
    .toLowerCase();
}

module.exports = {
  capitalize,
  kebabCase,
  snakeCase,
};
