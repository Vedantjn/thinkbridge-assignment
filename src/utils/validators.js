export const validateRestaurantInput = (input) => {
    const errors = [];
  
    if (!input.name || input.name.trim().length < 3) {
      errors.push('Name must be at least 3 characters long');
    }
  
    if (!input.description || input.description.trim().length < 10) {
      errors.push('Description must be at least 10 characters long');
    }
  
    if (!input.location || input.location.trim().length < 5) {
      errors.push('Location must be at least 5 characters long');
    }
  
    if (!input.cuisine) {
      errors.push('Cuisine is required');
    }
  
    if (input.rating === undefined || isNaN(input.rating) || input.rating < 1 || input.rating > 5) {
      errors.push('Rating must be a number between 1 and 5');
    }
  
    if (!input.openingHours || !/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]\s*-\s*([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(input.openingHours)) {
      errors.push('Opening hours must be in the format HH:MM - HH:MM');
    }
  
    if (!input.phoneNumber || !/^\d{10}$/.test(input.phoneNumber)) {
      errors.push('Phone number must be exactly 10 digits');
    }
  
    return errors;
  };