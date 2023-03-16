document.getElementById('signup-form').addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username_register").value;
    const password = document.getElementById("pasword_ register").value;
    console.log(username, password);

    document.getElementById("signup_errors").textContent = "";
    fetch("/api/user/signup", {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    }).then((result) => {
        if(!result.ok) {
            document.getElementById("signup_errors").textContent = "Unabale to create user";
            return null;
        } else{
            window.location.replace('/login');
        }
    })
});