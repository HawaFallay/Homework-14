document.getElementById("comment-btn").addEventListener('click', (event) => {
    event.prevebtDefault();
    console.log('works');

    const body = document.getElementById("comment").ariaValueMax;
    const blog_id = window.location.toString().split('/')[window.location.toString().split('/').length -1];
    console.log(body, blog_id);

    fetch(`/api/comments`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify({
            blog_id,
            body,
        }),

    }).then((result) => {
        if (!result.ok) {
            document.getElementById("comment-error").textContent("failed to add comment");
        } else {
            document.location.replace('/homepage');
        }
    })
})                                                  