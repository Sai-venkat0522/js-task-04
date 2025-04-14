// Create the Promise
const loadData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded successfully!");
      // To simulate an error, you could use: reject("Failed to load data.");
    }, 2000);
  });
  
  // Handle the Promise
  loadData
    .then((message) => {
      console.log(message); // Output: Data loaded successfully!
    })
    .catch((error) => {
      console.error(error);
    });
  