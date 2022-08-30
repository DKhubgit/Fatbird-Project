async function newFormHandler(event) {
    event.preventDefault();
    const sideID = document.querySelector('deleteSideID').value;
    const response = await fetch(`/api/menu/side/:id`, {
        method: 'DELETE',
        body: {
            id: sideID
        }
    })

    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert('Failed to delete side');
    }
}

document.querySelector('.delete-side-form').addEventListener('submit', newFormHandler);