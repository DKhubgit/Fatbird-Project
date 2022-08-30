async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const spicy_level = document.querySelector('#spicy_level').value;

    const response = await fetch(`/api/menu/sauce/:id`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            description,
            spicy_level,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert('Failed to update sauce');
    }
}

document.querySelector('.update-sauce-form').addEventListener('submit', newFormHandler);