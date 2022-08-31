async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#sauceName').value;
    const description = document.querySelector('#sauceDescription').value;
    const spicy_level = document.querySelector('#spicy_level').value;

    const response = await fetch(`/api/menu/sauce`, {
        method: 'POST',
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
        alert('Failed to add sauce');
    }
}

document.querySelector('#add-sauce-form').addEventListener('submit', newFormHandler);