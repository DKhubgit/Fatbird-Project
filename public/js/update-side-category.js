
async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#updateCategTitle').value;

    const response = await fetch(`api/menu/sidesCategory/:id`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
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