async function sharePrediction(event) {
    event.preventDefault();
    const eleId = event.target.id;
    var content = "";
    if (eleId === "today-button") {
        content = document.querySelector('#today-prediction').textContent;
    } else {
        content = document.querySelector('#tomorrow-prediction').textContent;
    }
    if(content) {
        const response = await fetch('/api/share', {
            method: 'post',
            body: JSON.stringify({
                content
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
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', sharePrediction);
});



