// // Creating a promise
// let myPromise = new Promise((resolve, reject) => {
//     let success = false; // Change this to false to see the "catch" part
//     if (success) {
//         resolve("The operation was successful!");
//     } else {
//         reject("The operation failed.");
//     }
// });
// console.log(myPromise)
// // Using `then` and `catch` to handle the promise
// myPromise
//     .then((message) => {
//         console.log("Success:", message);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });


// Creating a promise
let myPromise = new Promise((resolve, reject) => {
    let success = false; // Change this to false to see the "catch" part
    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed.");
    }
});

// Using async/await to handle the promise
async function handlePromise() {
    try {
        let message = await myPromise;  // Waits for the promise to resolve
        console.log("Success:", message);
    } catch (error) {
        console.log("Error:", error);   // Catches the rejection if the promise fails
    }
}

handlePromise();
