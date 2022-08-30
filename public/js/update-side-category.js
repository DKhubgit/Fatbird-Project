function capitalize(str) {
    let arr = str.split(" ");
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let title = arr[i]
        title = title.charAt(0).toUpperCase() + title.slice(1);
        res.push(title)
    }
    return res.join(" ");
}

async function newFormHandler(event) {
    event.preventDefault();

    const categID = document.querySelector('#update-sideCategory-title').dataset.id;
    let title = document.querySelector('#update-sideCategory-name').value;
    title = capitalize(title);
    console.log(title);

    // const response = await fetch(`api/menu/sidesCategory/:id`, {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //         id: categID,
    //         title

    //     }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });
    // if (response.ok) {
    //     document.location.replace('/user');
    // } else {
    //     alert('Failed to update side category');
    // }
}

document.querySelector('#update-sideCategory-form').addEventListener('submit', newFormHandler);