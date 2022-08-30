async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#update-sauce-name').value;
    const description = document.querySelector('#update-sauce-desc').value;
    const spicy_level = document.querySelector('#update-spicy-level').value;
    let id = document.querySelector('#update-sauce-title').dataset.id;

    const response = await fetch(`/api/menu/sauce/:id`, {
        method: 'PUT',
        body: JSON.stringify({
            id,
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

document.querySelector('#update-sauce-form').addEventListener('submit', newFormHandler);