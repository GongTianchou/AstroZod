async function addComment(event) {
    event.preventDefault();
    const shareId = event.target.getAttribute('data-id');
    const content = document.getElementById("comment-" + shareId).value;
    if(content) {
        const response = await fetch('/api/comment', {
            method: 'post',
            body: JSON.stringify({
                content,
                shareId
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
        alert(response.statusText);
        }
    }
}
document.querySelectorAll('.add-comment').forEach(button => {
    button.addEventListener('click', addComment);
});