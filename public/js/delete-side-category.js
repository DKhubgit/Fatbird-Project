async function newFormHandler(event) {
    event.preventDefault();
    const categID = document.querySelector('deleteCategID').value;

    const response = await fetch(`/api/menu/sidesCategory/:id`, {
        method: 'DELETE',
        body: {
            id: categID
        }
    })

    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert('Failed to delete side category');
    }
}

document.querySelector('#delete-sideCategory-form').addEventListener('submit', newFormHandler);