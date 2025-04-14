console.log("Starting process...");

setTimeout(() => {
    console.log("🔌 Connecting to server...");

    setTimeout(() => {
        console.log("📡 Fetching data...");

        setTimeout(() => {
            console.log("📊 Displaying result");

        }, 1000); // 1s delay for "Displaying result"
    }, 1000); // 1s delay for "Fetching data"
}, 1000); // 1s delay for "Connecting to server"
