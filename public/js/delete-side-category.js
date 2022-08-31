async function newFormHandler(event) {
    event.preventDefault();
    const categID = document.querySelector('#deleteCategID').value;

    const response = await fetch(`/api/menu/sidesCategory/${categID}`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: categID
        })
    })

    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert('Failed to delete side category');
    }
}

document.querySelector('#delete-sideCategory-form').addEventListener('submit', newFormHandler);