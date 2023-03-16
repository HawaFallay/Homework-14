const logout = (event) => {
    document.cookie = "logintoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=localhost";
    console.log("Logout button is working")
}

const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", logout)