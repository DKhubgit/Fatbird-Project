const routes = require('../controller')
const request = require('supertest');
const path = require('path');
const exphbs = require('express-handlebars');
const express = require('express');
const res = require('express/lib/response');
const Handlebars = require('handlebars');
const { Sauce } = require('../model/Sauce');
const { SidesCategory, Sides } = require('../model');

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
    `<link rel="stylesheet" href="/css/homepage.css">
<h1 class="display-1" id="hero-title">
    <span id="fb-span">FAT BIRDS</span>
    <br>
    <span id="wb-span">―WING BAR―</span>

</h1>
<div class="jumbotron" id="hero-container-desktop">
    <div class="hero-image-container" id="first-hero-image">
    </div>

    <div class="container-fluid" id="home-socials">
        <h5 id="socials-title">Follow Us!</h5>
        <ul id="home-social-media-list">
            <li class="social-li">
                <a class="social-link" href="https://www.yelp.com/biz/fat-birds-wing-bar-midland">
                    <i class="fa-brands fa-yelp"></i>
                </a>
            </li>
            <li class="social-li">
                <a class="social-link" href="https://www.facebook.com/people/Fat-Birds-Wing-Bar/100064282713069/">
                    <i class="fa-brands fa-square-facebook"></i>
                </a>
            </li>
            <li class="social-li"><a class="social-link" href="https://www.instagram.com/fatbirdswingbar/?hl=en">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
        </ul>
    </div>
    <div class="hero-image-container" id="second-hero-image">
    </div>
</div>`
        )
    })
});

describe('Route about me', () => {
    test('should render about', async () => {
        const res = await request(app).get('/about');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
    `<link rel="stylesheet" href="/css/about.css">
<div class="container-fluid" id="about-container">
    <div id="history-container" class="about-sub-container">
        <h2 class="about-title">Our History</h2>
        <p class="about-text">Founded in 2020, Fat Birds Wing Bar strives to bring a fresh take on wings to Midland TX.
            Our food is made to order so
            the wings are hot and juicy and never sit around in a warmer. We also make all our sauces and dips fresh in
            house using
            real ingredients and cooking techniques. We aim for great tasting food along with our friendly staff and a
            fun
            environment for everyone to enjoy. We are family owned and family friendly. We hope to see you, and we
            appreciate all
            the love and support we’ve received over the years. <br>
            <br>
            Thank you and come see us soon!
        </p>
    </div>
</div>`
        )
    })
});

describe('Route menu', () => {
    test('should render menu', async () => {
        const res = await request(app).get('/menu');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
    `<link rel="stylesheet" href="/css/main-menu.css">
<div id="main-menu-container">
    <div id="carousel-photos" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100 h-50 car-img" src="/images/image0.jpeg">
            </div>
            <div class="carousel-item ">
                <img class="d-block w-100 h-50 car-img" src="/images/image1.jpeg">
            </div>
            <div class="carousel-item ">
                <img class="d-block w-100 h-50 car-img" src="/images/image2.jpeg">
            </div>
            <div class="carousel-item ">
                <img class="d-block w-100 h-50 car-img" src="/images/image3.jpeg">
            </div>
            <div class="carousel-item ">
                <img class="d-block w-100 h-50 car-img" src="/images/image4.jpeg">
            </div>
            <div class="carousel-item ">
                <img class="d-block w-100 h-50 car-img" src="/images/image5.jpeg">
            </div>
            <div class="carousel-item ">
                <img class="d-block w-100 h-50 car-img" src="/images/image6.jpeg">
            </div>
            <div class="carousel-item ">
                <img class="d-block w-100 h-50 car-img" src="/images/image7.jpeg">
            </div>
            <div class="carousel-item ">
                <img class="d-block w-100 h-50 car-img" src="/images/image10.jpeg">
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carousel-photos" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-photos" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>`
        )
    })
});

describe('Render sauces', () => {
    test('should render sauces', async () => {
        const res = await request(app).get('/menu/sauces');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
    `<link rel="stylesheet" href="/css/sauces.css">
<h2 class="menu-title" id="sauce-menu-title">SAUCES</h2>
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
    test('should return paragraph if spicy level is greater than 0', async () => {
        const helper = `{{#if sauce.spicy_level}}<p class="sauce-spice-level">🌶️ Spice Level: <span class="spice-level-span">{{sauce.spicy_level}}</span></p>{{/if}}`;
        const dbSauceData = await Sauce.findByPk(6);
        const sauce = dbSauceData.get({ plain: true });
        const template = Handlebars.compile(helper);
        const result = template({sauce});
        expect(result).toBe(
`<p class="sauce-spice-level">🌶️ Spice Level: <span class="spice-level-span">2</span></p>`
            )
    })
    test('should return empty space if spicy level is 0', async () => {
        const helper = `{{#if sauce.spicy_level}}<p class="sauce-spice-level">🌶️ Spice Level: <span class="spice-level-span">{{sauce.spicy_level}}</span></p>{{/if}}`;
        const dbSauceData = await Sauce.findByPk(2);
        const sauce = dbSauceData.get({ plain: true });
        const template = Handlebars.compile(helper);
        const result = template({sauce});
        expect(result).toBe(``);
    })
    test('should return sauce id ans sauce description', async () => {
        const helper = 
`<h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/{{sauce.id}}">{{sauce.title}}</a> </h2>
<p class="sauce-description">{{sauce.description}}</p>`
        const dbSauceData = await Sauce.findByPk(6);
        const sauce = dbSauceData.get({ plain: true });
        const template = Handlebars.compile(helper);
        const result = template({sauce});
        expect(result).toBe(
`<h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/6">Mango Habanero</a> </h2>
<p class="sauce-description">Sweet mangoes. Fiery habeneros!</p>`
        )
    })
});

describe('Render sauce', () => {
    test('should render sauce', async () => {
        const res = await request(app).get('/menu/sauces/4');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
    `<link rel="stylesheet" href="/css/sauces.css">
<div class="sauce-container" id="single-sauce-container">
    <h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/4">Garlic Parm</a> </h2>
    <p class="sauce-description">Hope you&#x27;re not on a date! Oodles of Garlic n Parm.</p>
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
    test('should return with sauce id, title, and description', async () => {
        const helper =
`<h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/{{sauce.id}}">{{sauce.title}}</a> </h2>
<p class="sauce-description">{{sauce.description}}</p>`
        const dbSauceData = await Sauce.findByPk(1);
        const sauce = dbSauceData.get({ plain: true });
        const template = Handlebars.compile(helper);
        const result = template({sauce});
        expect(result).toBe(
`<h2 class="sauce-name"> <a class="sauce-link" href="/menu/sauces/1">Aloha</a> </h2>
<p class="sauce-description">Pineapple &amp; Teriyaki. Aloha from the islands!</p>`
        )
    })
    test('should return paragraph if spicy_level is greater than 0', async () => {
        const helper = 
`{{#if sauce.spicy_level}}<p class="sauce-spice-level">🌶️ Spice Level: <span class="spice-level-span">{{sauce.spicy_level}}</span></p>{{/if}}`
        const dbSauceData = await Sauce.findByPk(10);
        const sauce = dbSauceData.get({ plain: true });
        const template = Handlebars.compile(helper);
        const result = template({sauce});
        expect(result).toBe(
`<p class="sauce-spice-level">🌶️ Spice Level: <span class="spice-level-span">1</span></p>`  
        );
    })
    test('should return empty space if spicy_level is 0', async () => {
        const helper = 
        `{{#if sauce.spicy_level}}<p class="sauce-spice-level">🌶️ Spice Level: <span class="spice-level-span">{{sauce.spicy_level}}</span></p>{{/if}}`
        const dbSauceData = await Sauce.findByPk(7);
        const sauce = dbSauceData.get({ plain: true });
        const template = Handlebars.compile(helper);
        const result = template({sauce});
        expect(result).toBe(``);
    })
});

describe('Render sidesCategories', () => {
    test('should render sidesCategories', async () => {
        const res = await request(app).get('/menu/sides');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
    `<link rel="stylesheet" href="/css/sides.css">
<div id="sides-container">
    <h1 class="display-4" id="sides-category-header">Select From Our Sides!</h1>
    <div id="sides-category-wrapper">
        <div class="container-fluid sides-category-container">
            <h2 class="category-title"><a class='category-link'
                    href="/menu/sides/1">Dips</a>
            </h2>
        </div>
        <div class="container-fluid sides-category-container">
            <h2 class="category-title"><a class='category-link'
                    href="/menu/sides/2">Fat Fries</a>
            </h2>
        </div>
        <div class="container-fluid sides-category-container">
            <h2 class="category-title"><a class='category-link'
                    href="/menu/sides/3">Salads</a>
            </h2>
        </div>
        <div class="container-fluid sides-category-container">
            <h2 class="category-title"><a class='category-link'
                    href="/menu/sides/4">Sandos</a>
            </h2>
        </div>
        <div class="container-fluid sides-category-container">
            <h2 class="category-title"><a class='category-link'
                    href="/menu/sides/5">Sides</a>
            </h2>
        </div>
        <div class="container-fluid sides-category-container">
            <h2 class="category-title"><a class='category-link'
                    href="/menu/sides/6">Sweets</a>
            </h2>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
    anime({
        targets: '.sides-category-container',
        translateX: 400,
        delay: anime.stagger(200, { start: 200 })
    });
    anime({
        targets: '.category-title',
        translateY: 300
    })
</script>`
        )
    })
    test('should return category id and title', async () => {
        const helper = 
`<h2 class="category-title"><a class='category-link' href="/menu/sides/{{category.id}}">{{category.title}}</a></h2>`;
        const dbSideCategoryData = await SidesCategory.findByPk(4, {
            include: [
                {
                    model: Sides,
                    attributes: ['id', 'title'],
                },
            ],
        })
        const category = dbSideCategoryData.get({ plain: true });
        const template = Handlebars.compile(helper);
        const result = template({category});
        expect(result).toBe(
`<h2 class="category-title"><a class='category-link' href="/menu/sides/4">Sandos</a></h2>`
        )
    })
});

describe('Render sides', () => {
    test('should render sides', async () => {
        const res = await request(app).get('/menu/sides/1');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
    `<link rel="stylesheet" href="/css/sides.css">
<link rel="stylesheet" href="/css/side.css">
<div class="container-fluid" id="side-container">
    <h2 class="display-4" id="side-title">Dips</h2>
    <h3 id="side-select-text">We offer the following choices for Dips!</h3>
    <div id="side-items-container">
        <div class="side-item">
            <h3 class="side-item-title"> <a class='side-item-link' href="/menu/side/1">Ranch</a></h3>
        </div>
        <div class="side-item">
            <h3 class="side-item-title"> <a class='side-item-link' href="/menu/side/2">Bleu Cheese</a></h3>
        </div>
        <div class="side-item">
            <h3 class="side-item-title"> <a class='side-item-link' href="/menu/side/3">Honey Mustard</a></h3>
        </div>
        <div class="side-item">
            <h3 class="side-item-title"> <a class='side-item-link' href="/menu/side/4">Fat Sauce</a></h3>
        </div>
        <div class="side-item">
            <h3 class="side-item-title"> <a class='side-item-link' href="/menu/side/5">Sweet Chili</a></h3>
        </div>
        <a href="/menu/sides" id="sides-backlink">Back to Sides</a>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
    anime({
        targets: ['.side-item-title', '#sides-backlink'],
        translateY: 300
    })
</script>`
        )
    })
    test('should return side category title', async () => {
        const helper = 
`<h2 class="display-4" id="side-title">{{sideCategory.title}}</h2><h3 id="side-select-text">We offer the following choices for {{sideCategory.title}}!</h3>`;
        const dbSideCategoryData = await SidesCategory.findByPk(2, {
            include: [
                {
                    model: Sides,
                    attributes: ['id', 'title'],
                },
            ],
        })
        const sideCategory = dbSideCategoryData.get({ plain: true });
        const template = Handlebars.compile(helper);
        const result = template({sideCategory});
        expect(result).toBe(
`<h2 class="display-4" id="side-title">Fat Fries</h2><h3 id="side-select-text">We offer the following choices for Fat Fries!</h3>`
        )
    })
    test('should return side id and title', async () => {
        const helper = 
`{{#each sideCategory.sides as |side|}}<div class="side-item"><h3 class="side-item-title"> <a class='side-item-link' href="/menu/side/{{side.id}}">{{side.title}}</a></h3></div>{{/each}}`;
        const dbSideCategoryData = await SidesCategory.findByPk(5, {
            include: [
                {
                    model: Sides,
                    where: {id: 23},
                    attributes: ['id', 'title'],
                    
                },
            ],
        })
        const sideCategory = dbSideCategoryData.get({ plain: true });
        const template = Handlebars.compile(helper);
        const result = template({sideCategory});
        expect(result).toBe(
`<div class="side-item"><h3 class="side-item-title"> <a class='side-item-link' href="/menu/side/23">Garlic Noodles</a></h3></div>`
        )
    })
});

describe('Render side', () => {
    test('should render side', async () => {
        const res = await request(app).get('/menu/side/16');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
    `<link rel="stylesheet" href="/css/sides.css">
<link rel="stylesheet" href="/css/side.css">
<div id="single-side-container">
    <div class="single-side-wrapper">
        <h2 class="side-item-title">Bleu Wedge</h2>
    </div>

    <a href="/menu/sides/3" id="single-side-back">Back</a>
</div>

<script src=" https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
    anime({
        targets: ['.side-item-title'],
        translateY: 300
    })
</script>`
        );
    })
    test('should return side title', async () => {
        const helper =
`<h2 class="side-item-title">{{side.title}}</h2>`;
        const dbSideData = await Sides.findByPk(29);
        const side = dbSideData.get({ plain: true });
        const template = Handlebars.compile(helper);
        const result = template({side});
        expect(result).toBe(
`<h2 class="side-item-title">Fried Pickles</h2>`
        )
    });
})

describe('Render contact', () => {
    test('should render contact', async () => {
        const res = await request(app).get('/contact');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.text).toContain(
    `<link rel="stylesheet" href="/css/contact.css">
<div class="container-fluid" id="contact-container">
    <div class="container info-container" id="address-container">
        <h3 class="info-title" id="address-title">Location</h3>
        <p id="address-text" class="info-text">
            <a class="contact-link"
                href="https://www.google.com/maps?ll=32.032001,-102.125877&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=9583460874408612889">3209
                Courtyard Drive Ste L, Midland, TX, United States, Texas </a><br>
            <br>
        </p>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.3764136158006!2d-102.1258773!3d32.0320014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fbd9284c876925%3A0x84ff4ae3d1fad419!2sFat%20Birds%20Wing%20Bar!5e0!3m2!1sen!2sus!4v1661119650772!5m2!1sen!2sus"
            width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" id="location-map">
        </iframe>
    </div>
    <div class="container info-container" id="contact-info-container">
        <h3 class="info-title" id="contact-info-title">Contact</h3>
        <p id="contact-phone" class="info-text">
            📞: <a class="contact-link" href="tel:(432) 218-7390">(432)-218-7390 <br></a>
            <br>
            📧: <a class="contact-link" href="mailto:FatBirdMidland@gmail.com">FatBirdMidland@gmail.com <br></a>

        </p>
    </div>
    <div class="container info-container" id="business-hours-container">
        <h3 class="info-title" id="business-hours-title">Business Hours</h3>
        <p id="business-hours-text" class="info-text">
            Mon: Closed
            <br>
            <br>
            Sun-Thurs: 11:00 AM - 9:00 PM
            <br>
            <br>
            Fri-Sat: 11:00 AM - 10:00 PM
            <br>
        </p>
    </div>
</div>
<div class="container-fluid" id="home-socials">
    <h5 id="socials-title">Follow Us!</h5>
    <ul id="home-social-media-list">
        <li class="social-li">
            <a class="social-link" href="https://www.yelp.com/biz/fat-birds-wing-bar-midland">
                <i class="fa-brands fa-yelp"></i>
            </a>
        </li>
        <li class="social-li">
            <a class="social-link" href="https://www.facebook.com/people/Fat-Birds-Wing-Bar/100064282713069/">
                <i class="fa-brands fa-square-facebook"></i>
            </a>
        </li>
        <li class="social-li"><a class="social-link" href="https://www.instagram.com/fatbirdswingbar/?hl=en">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </li>
    </ul>
</div><br>
<br>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script src="https://kit.fontawesome.com/22e6b9b0f7.js" crossorigin="anonymous"></script>
<script>
    anime({
        targets: '.info-container',
        translateY: 300,
    })
</script>`
        )
    });
})
