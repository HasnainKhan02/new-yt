let promise = new Promise(function(resolve, reject) {
    let success = false;
    let failure = false;
    let notAvilable = true;

    if (success) {
        resolve("Burger is ready!");
    } else if (failure) {
        reject("Burger not available.");
    }
    else if (notAvilable) {
        reject("Item not Avilable here")
    }
});
promise
    .then(function(message) {
        console.log("Success: " + message);
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });

