async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#sideTitle').value;
    const image = document.querySelector('#sideImage').value;
    const alt_image = document.querySelector('#altImage').value;
    const cat_id = document.querySelector('#cat_id').value;

    const response = await fetch(`/api/menu/side`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            image,
            alt_image,
            cat_id,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert('Failed to add side');
    }
}

document.querySelector('#add-side-form').addEventListener('submit', newFormHandler);