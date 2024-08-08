let mockRestaurants = [
  {
    id: '1',
    name: 'Pizza Palace',
    description: 'Best pizzas in town',
    location: '123 Main St',
    cuisine: 'Italian',
    rating: 4.5,
    openingHours: '11:00 - 10:00',
    phoneNumber: '8475527495',
    images: ['/images/default1.jpeg', '/images/default2.jpeg', '/images/default3.jpeg'],
  },
  {
    id: '2',
    name: 'Spice Garden',
    description: 'Flavorful dishes with variety of spices.',
    location: '789 Curry Avenue, Mumbai',
    cuisine: 'Indian',
    rating: 4.6,
    openingHours: '10:00 - 22:00',
    phoneNumber: '8472947382',
    images: ['/images/default2.jpeg', '/images/default3.jpeg', '/images/default1.jpeg'],
  },
];

export const getRestaurants = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRestaurants), 500);
  });
};

export const getRestaurant = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const restaurant = mockRestaurants.find((r) => r.id === id);
      if (restaurant) {
        resolve(restaurant);
      } else {
        reject(new Error('Restaurant not found'));
      }
    }, 500);
  });
};

export const createRestaurant = async (restaurant) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newRestaurant = { ...restaurant, id: String(mockRestaurants.length + 1) };
      mockRestaurants.push(newRestaurant);
      resolve(newRestaurant);
    }, 500);
  });
};

export const updateRestaurant = async (id, restaurant) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockRestaurants.findIndex((r) => r.id === id);
      if (index !== -1) {
        mockRestaurants[index] = { ...restaurant, id };
        resolve(mockRestaurants[index]);
      } else {
        reject(new Error('Restaurant not found'));
      }
    }, 500);
  });
};

export const deleteRestaurant = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockRestaurants.findIndex((r) => r.id === id);
      if (index !== -1) {
        const deletedRestaurant = mockRestaurants.splice(index, 1)[0];
        resolve(deletedRestaurant);
      } else {
        reject(new Error('Restaurant not found'));
      }
    }, 500);
  });
};