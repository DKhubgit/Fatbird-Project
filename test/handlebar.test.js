const routes = require('../controller')
const request = require('supertest');
const path = require('path');
const exphbs = require('express-handlebars');
const express = require('express');
const res = require('express/lib/response');

const app = new express();
// Create handlebars.js engine object
const hbs = exphbs.create({});

// Register the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

describe('Route homepage', () => {
    test('should render homepage', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
`<div class="jumbotron" id="hero-container-desktop">
    <h1 class="display-1" id="hero-title">Fat Birds Wing Bar</h1>
    <img class="img-fluid mx-auto" id="hero-img"
        src="https://s3-media0.fl.yelpcdn.com/bphoto/PClfDiHUgmuiJktJKekwqQ/o.jpg">
    </img>
    <img src="https://s3-media0.fl.yelpcdn.com/bphoto/ThG14a-uWSXmdSjy2z3YuA/o.jpg" alt="" class="hidden"
        id="mobile-hero-img">
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
    anime({
        targets: '#hero-title',
        translateY: 300
    })
</script>`
        )
    })
});

describe('Route about me', () => {
    test('should render about', async () => {
        const res = await request(app).get('/about');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
`<div class="container-fluid" id="about-container">
    <div class="jumbotron">
        <h1 class="display-1" id="about-header">Who Are We?</h1>
    </div>
    <div id="history-container" class="about-sub-container">
        <h2 class="about-title">Our History</h2>
        <p class="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis ipsam et, deleniti
            ratione
            exercitationem ad quia consequatur, perferendis odio explicabo itaque nam eum id iste voluptate ex
            consectetur earum.
            Autem cupiditate tempore iste ipsum repellendus rem magni quae impedit odit dolor aperiam, omnis nihil
            quasi, esse inventore expedita quibusdam nulla. Omnis, eos accusantium explicabo facere officia consectetur.
            Inventore, perspiciatis!
            Pariatur cum molestiae mollitia doloribus minima corporis! Ipsa nisi adipisci laudantium doloremque vero
            sunt totam temporibus, unde aperiam. Vero voluptatem exercitationem consequuntur velit, deserunt eligendi
            facere accusantium nobis. Ullam, voluptatibus.</p>
    </div>
    <div id="goal-container" class="about-sub-container">
        <h2 class="about-title">Our Goals</h2>
        <p class="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis ipsam et, deleniti
            ratione
            exercitationem ad quia consequatur, perferendis odio explicabo itaque nam eum id iste voluptate ex
            consectetur earum.
            Autem cupiditate tempore iste ipsum repellendus rem magni quae impedit odit dolor aperiam, omnis nihil
            quasi, esse inventore expedita quibusdam nulla. Omnis, eos accusantium explicabo facere officia consectetur.
            Inventore, perspiciatis!
            Pariatur cum molestiae mollitia doloribus minima corporis! Ipsa nisi adipisci laudantium doloremque vero
            sunt totam temporibus, unde aperiam. Vero voluptatem exercitationem consequuntur velit, deserunt eligendi
            facere accusantium nobis. Ullam, voluptatibus.</p>
    </div>
    <div id="what-we-do-container" class="about-sub-container">
        <h2 class="about-title">What We Do</h2>
        <p class="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis ipsam et, deleniti
            ratione
            exercitationem ad quia consequatur, perferendis odio explicabo itaque nam eum id iste voluptate ex
            consectetur earum.
            Autem cupiditate tempore iste ipsum repellendus rem magni quae impedit odit dolor aperiam, omnis nihil
            quasi, esse inventore expedita quibusdam nulla. Omnis, eos accusantium explicabo facere officia consectetur.
            Inventore, perspiciatis!
            Pariatur cum molestiae mollitia doloribus minima corporis! Ipsa nisi adipisci laudantium doloremque vero
            sunt totam temporibus, unde aperiam. Vero voluptatem exercitationem consequuntur velit, deserunt eligendi
            facere accusantium nobis. Ullam, voluptatibus.</p>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
    anime({
        targets: ['#history-container', '#what-we-do-container', '#goal-container'],
        translateY: 300,
    })
</script>`
        )
    })
});

describe('Route menu', () => {
    test('should render menu', async () => {
        const res = await request(app).get('/menu');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
`<div class="container-fluid" id="main-menu-container">
    <div id="sizes-container">
        <h1 class="menu-title">Sizes</h1>
        <div id="wing-info-container">
            <div class="wing-size-container">
                <h2 class="wing-type">6 Wings</h2>
                <p class="wing-info-description">
                    Choice Between:
                <ul class="wing-info-ul">
                    <li>- 1 Sauce</li>
                    <li>- 1 Dip</li>
                </ul>
                </p>
            </div>
            <div class="wing-size-container">
                <h2 class="wing-type">8 Wings</h2>
                <p class="wing-info-description">
                    Choice Between:
                <ul class="wing-info-ul">
                    <li>- 2 Sauces</li>
                    <li>- 1 Dip</li>
                </ul>
                </p>
            </div>
            <div class="wing-size-container">
                <h2 class="wing-type">12 Wings</h2>
                <p class="wing-info-description">
                    Choice Between:
                <ul class="wing-info-ul">
                    <li>- 3 Sauces</li>
                    <li>- 2 Dips</li>
                </ul>
                </p>
            </div>
        </div>
        <div class="container-fluid" id="menu-image-container">
            <div class="menu-img" style="background-image: url(https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
                )"></div>
            <div class="menu-img" style="background-image: url(https://images.unsplash.com/photo-1626082935855-cb6e6c670f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
                )"></div>
            <div class="menu-img" style="background-image: url(https://images.unsplash.com/photo-1631897788978-da06ec45adcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
                )"></div>
        </div>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
    anime({
        targets: ['.wing-size-container', '.menu-img'],
        translateY: 200
    });
</script>`
        )
    })
});

describe('Render sauces', () => {
    test('should render sauce', async () => {
        const res = await request(app).get('/menu/sauces');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
`<h2 class="menu-title">Sauces</h2>
<h3 id="side-select-text">All sauces are made fresh in house!</h3>
<div id="sauces-container">
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/1">Aloha</a> </h2>
        <p class="sauce-description">Pineapple &amp; Teriyaki. Aloha from the islands!</p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/2">BBQ</a> </h2>
        <p class="sauce-description">Smokey, Tangy goodness! Choose: Regular or Honey.</p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/3">Buffalo</a> </h2>
        <p class="sauce-description">A Classic! Choose: Mild, Hot, or Insane.</p>
        <p class="sauce-spice-level">🌶️ Spice Level: <span class="spice-level-span">1</span></p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/4">Garlic Parm</a> </h2>
        <p class="sauce-description">Hope you&#x27;re not on a date! Oodles of Garlic n Parm.</p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/5">Lemon Pepper</a> </h2>
        <p class="sauce-description">Fresh lemon + cracked pepper &#x3D; Delicious!</p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/6">Mango Habanero</a> </h2>
        <p class="sauce-description">Sweet mangoes. Fiery habeneros!</p>
        <p class="sauce-spice-level">🌶️ Spice Level: <span class="spice-level-span">2</span></p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/7">Mexi Cali</a> </h2>
        <p class="sauce-description">Mexican flavors in west coast fashion!</p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/8">Orange</a> </h2>
        <p class="sauce-description">Chinese style orange sauce!</p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/9">Satay</a> </h2>
        <p class="sauce-description">Peanuts &amp; spices made into a savory sauce!</p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/10">Seoul St.</a> </h2>
        <p class="sauce-description">Korean flavors sure to warm your soul!</p>
        <p class="sauce-spice-level">🌶️ Spice Level: <span class="spice-level-span">1</span></p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/11">Sweet Saigon</a> </h2>
        <p class="sauce-description">Sweet and savory in every bite.</p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/12">Thai Sweet Chili</a> </h2>
        <p class="sauce-description">Fresh flavors, sweet chili, thai-rific!</p>
    </div>
    <div class="sauce-container">
        <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/13">Truffalo</a> </h2>
        <p class="sauce-description">Real Truffles in buffalo sauce! (Order of 6) + 2</p>
        <p class="sauce-spice-level">🌶️ Spice Level: <span class="spice-level-span">1</span></p>
    </div>
    <a href="/menu" class="backLink">View Chicken Options</a>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
    anime({
        targets: ['.sauce-container', '.backLink'],
        translateX: 500
    })
</script>`
        )
    })
});
