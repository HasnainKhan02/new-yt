// 2️⃣ Why use IIFE?

// Avoid global variables
// Variables inside IIFE are scoped locally
// Run code immediately
// Good for initialization
// Encapsulation
// Keeps your code organized and avoids conflicts


(function iife() {
    console.log("Run it immediately! - Immediately-Invoked-Function-Expressions_IIFE .js:12");
})();

// &&&&&&&&&&&&&&&&&& if you use 2 or 4 iife ; "Semi Colon" is Must here &&&&&&&&&&&&&&&&&&&&&&

(function iife2() {
    console.log("Run it immediately second! - Immediately-Invoked-Function-Expressions_IIFE .js:18");
})();