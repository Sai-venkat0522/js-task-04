// Function that returns a mock user after 1 second
async function getUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "venkat", age: 22 });
      }, 1000);
    });
  }
  
  // Using the async function and logging the result
  async function main() {
    const user = await getUser();
    console.log(user); // { name: "venkat", age: 22 }
  }
  
  main();
  