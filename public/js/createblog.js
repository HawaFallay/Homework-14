const { application } = require("express");
const { json } = require("sequelize");

document.getElementById("blog-form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("works");

    const title = document.getElementById("blog-title").value;
    const body = document.getElementById("blog-content").value;
    console.log(title, body);

    fetch('/api/blogpost', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body,
        }),
    }).then((response) => {
        if (!response.ok) {
            document.getElementById("create-blog-error").textContent = "Blog not created";
            console.log("somethings gone wrong");
        } else {
            document.location.replace('/dashboard');

        }

        });
    });
