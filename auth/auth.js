// Firebase configuration
// const firebaseConfig = {

// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Get references to auth and firestore
// const auth = firebase.auth();
// const db = firebase.firestore();

// Sign-up function
function signUp() {
    // const email = document.getElementById("signup-email").value;
    // const password = document.getElementById("signup-password").value;
    // const username = document.getElementById("signup-username").value;

    // auth.createUserWithEmailAndPassword(email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         // Add user to Firestore
    //         return db.collection("users").doc(user.uid).set({
    //             username: username,
    //             email: email
    //         });
    //     })
    //     .then(() => {
    //         alert("User created successfully!");
    //         // You can redirect the user or update UI here
    //     })
    //     .catch((error) => {
    //         const errorMessage = error.message;
    //         alert(errorMessage);
    //     });
}

// Sign-in function
function signIn() {
    // const email = document.getElementById("signin-email").value;
    // const password = document.getElementById("signin-password").value;

    // auth.signInWithEmailAndPassword(email, password)
    //     .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         alert("Signed in successfully!");
    //         // You can redirect the user or update UI here
    //     })
    //     .catch((error) => {
    //         const errorMessage = error.message;
    //         alert(errorMessage);
    //     });
}

// Add event listeners to buttons
document.getElementById("signup-button").addEventListener("click", function(event) {
    event.preventDefault();
    signUp();
});

document.getElementById("signin-button").addEventListener("click", function(event) {
    event.preventDefault();
    signIn();
});

// UI animation logic
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
