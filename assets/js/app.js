const feed = [
    {
        "id": 1,
        "username": "Neil M",
        "description_HTML": "<p>I just setup this new discord bot, let me know what you all think. <a href='/' class='link link-primary'>link</a></p>",
        "likes": 9
    },
    {
        "id": 2,
        "username": "Nichole K",
        "description_HTML": "<p>Just finished my <a href='/' class='link link-primary'>next comic</a>, check it out.</p>",
        "likes": 12
    },
    {
        "id": 3,
        "username": "Jim R",
        "description_HTML": "<p>I can't stop listening to the <a href='/' class='link link-primary'>new album</a>. Who else is liking it?</p>",
        "likes": 9
    }
];

// Contenedor en DOM
const feedList = document.querySelector('#feedList');

feed.map(post => {

    // Crear Card
    const card = document.createElement('div');
    card.className = 'card';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    const row = document.createElement('row');
    row.className = 'row';

    const col1 =  document.createElement('div');
    col1.className = 'col';

    const userName = document.createElement('h3');
    userName.textContent = post.username;

    const col2 = document.createElement('div');
    col2.className = 'col text-right';

    const likesCounter = document.createElement('span');
    likesCounter.className = 'fw-bold';
    likesCounter.innerHTML = `${post.likes} like(s)`;

    const likeButton = document.createElement('button');
    likeButton.className = 'btn btn-warning btn-like';
    likeButton.textContent = 'Like';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.innerHTML = post.description_HTML;

    // Añadir funcionalidad al botón (actualizar contador)
    likeButton.addEventListener('click', () => {
        const currentPost = feed.findIndex((item) => item.id === post.id);
        feed[currentPost].likes += 1;
        likesCounter.innerHTML = `${feed[currentPost].likes} like(s)`;
    });

    // Jerarquía de los elementos
    col1.appendChild(userName);
    col2.append(likesCounter, likeButton);
    row.append(col1, col2);
    cardHeader.appendChild(row);
    card.append(cardHeader, cardBody);

    // Append de Card actual a Contenedor en DOM
    feedList.appendChild(card);
});