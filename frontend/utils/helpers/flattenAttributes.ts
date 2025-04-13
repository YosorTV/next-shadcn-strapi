const flattenAttributes = <T>(data: T): T => {
  // Check if data is a plain object; return as is if not
  if (typeof data !== 'object' || data === null || data instanceof Date || typeof data === 'function') {
    return data;
  }

  // If data is an array, apply flattenAttributes to each element and return as array
  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item)) as T;
  }

  // Initialize an object with an index signature for the flattened structure
  const flattened: { [key: string]: unknown } = {};

  // Iterate over each key in the object using Object.keys()
  Object.keys(data).forEach((key) => {
    // Use a type assertion to allow indexing
    const value = (data as Record<string, unknown>)[key];

    // If the key is 'attributes' or 'data', and its value is an object, merge their contents
    if ((key === 'attributes' || key === 'data') && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(flattened, flattenAttributes(value));
    } else {
      // For other keys, copy the value, applying flattenAttributes if it's an object
      flattened[key] = flattenAttributes(value);
    }
  });

  return flattened as T;
};

export default flattenAttributes;
