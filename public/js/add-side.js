async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const image = document.querySelector('#image').value;
    const alt_image = document.querySelector('#alt_image').value;
    const cat_id = document.querySelector('#cat_id').value;

    const response = await fetch(`/api/menu/side`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            image,
            alt_image,
            cat_id,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/user');
    } else {
        alert('Faild to add side');
    }
}

document.querySelector('.add-side-form').addEventListener('submit', newFormHandler);