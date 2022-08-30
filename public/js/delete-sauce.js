async function newFormHandler(event) {
    event.preventDefault();
    const sauceID = document.querySelector('deleteSauceID').value;
    const response = await fetch(`/api/menu/sauce/:id`, {
        method: 'DELETE',
        body: {
            id: sauceID
        }
    });

    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert('Faild to delete sauce');
    }
}

document.querySelector('#delete-sauce-form').addEventListener('submit', newFormHandler);