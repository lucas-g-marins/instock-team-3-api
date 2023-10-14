function validateWarehouseData(data) {
  if (!data || typeof data !== "object") {
    return false; // Data is missing or not an object
  }

  if (
    typeof data.warehouse_name !== "string" ||
    data.warehouse_name.trim() === ""
  ) {
    return false; // Warehouse name is missing or not a non-empty string
  }

  if (typeof data.address !== "string" || data.address.trim() === "") {
    return false; // Address is missing or not a non-empty string
  }

  if (typeof data.city !== "string" || data.city.trim() === "") {
    return false; // City is missing or not a non-empty string
  }

  if (typeof data.country !== "string" || data.country.trim() === "") {
    return false; // Country is missing or not a non-empty string
  }

  if (
    typeof data.contact_name !== "string" ||
    data.contact_name.trim() === ""
  ) {
    return false; // Contact name is missing or not a non-empty string
  }

  if (
    typeof data.contact_position !== "string" ||
    data.contact_position.trim() === ""
  ) {
    return false; // Contact position is missing or not a non-empty string
  }

  // You can add more specific checks for phone number and email formats

  return true; // All validation checks pass
}

module.exports = { validateWarehouseData };
