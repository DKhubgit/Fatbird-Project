async function newFormHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/menu/sauce/:id`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert('Faild to delete sauce');
    }
}

document.querySelector('#delete-sauce-form').addEventListener('submit', newFormHandler);