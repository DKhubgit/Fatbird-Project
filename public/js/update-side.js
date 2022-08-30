async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#update-sideTitle').value;
    const image = document.querySelector('#update-sideImage').value;
    const alt_image = document.querySelector('#update_altImage').value;
    const cat_id = document.querySelector('#update-cat_id').value;
    const id = document.querySelector('#update-side-text').dataset.id

    const response = await fetch(`/api/menu/side/:id`, {
        method: 'PUT',
        body: JSON.stringify({
            id,
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
        alert('Failed to update side');
    }
}

document.querySelector('.update-side-form').addEventListener('submit', newFormHandler);
