async function newFormHandler(event) {
    event.preventDefault();

    const categID = document.querySelector('#update-sideCategory-title').dataset.id;
    const title = document.querySelector('#update-sideCategory-name').value;

    const response = await fetch(`api/menu/sidesCategory/:id`, {
        method: 'PUT',
        body: JSON.stringify({
            id: categID,
            title

        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert('Failed to update side category');
    }
}

document.querySelector('#update-sideCategory-form').addEventListener('submit', newFormHandler);