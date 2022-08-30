async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#categoryName').value;

    const response = await fetch(`/api/menu/sidesCategory`, {
        method: 'POST',
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
        alert('Failed to add side category');
    }
}

document.querySelector('.add-sideCategory-form').addEventListener('submit', newFormHandler);