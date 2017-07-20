
    DROP DATABASE IF EXISTS roamertour_db;
    CREATE DATABASE roamertour_db;
    \c roamertour_db;
    CREATE TABLE cities(     idc SERIAL PRIMARY KEY,     cities TEXT );
    INSERT 
    INTO
        cities
        (cities) 
    VALUES
        ('New York'), (
            'Los Angeles'
        ), (
            'San Francisco'
        ), (
            'Miami'
        ), (
            'Chicago'
        );
    CREATE TABLE tour(     idt SERIAL PRIMARY KEY,     name TEXT,     cities TEXT,     duration TEXT,     image TEXT,     cities_id INTEGER );
    INSERT 
    INTO
        tour
        (name, cities, duration, image, cities_id) 
    VALUES
        ('Statue of Liberty and Ellis Island Guided Tour', 'New York', '4 hours', 'https://cache-graphicslib.viator.com/graphicslib/media/ed/-photo_24787949-fit468x296.jpg', 1), (
            'NYC at Night Bus Tour', 'New York', '4 hours', 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/7081/SITours/nyc-at-night-bus-tour-in-new-york-city-170665.jpg', 1
        ), (
            'Best of Brooklyn Half-Day Food and Culture Tour', 'New York', '4 hours', 'https://s-media-cache-ak0.pinimg.com/originals/ba/52/2d/ba522d60cbda5ff55f18da53a3482005.jpg', 1
        ), (
            'Full-Day New York City Tour with Empire State Building Observatory and Statue of Liberty Admission', 'New York', '9 hours', 'https://d12dkjq56sjcos.cloudfront.net/pub/media/catalog/product/cache/389d136d708dee39fad54641e433f0dc/c/l/classic-1-day-tour-ticket-empire_state_911_memorial-jan-2017.jpg', 1
        ), (
            'Big Apple Helicopter Tour of New York', 'New York', '3 hours', 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/18421/SITours/new-york-helicopter-tour-manhattan-brooklyn-and-staten-island-in-new-york-city-232946.jpg', 1
        ), (
            'Best of Hollywood Food Tour', 'Los Angeles', '4 hours', 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/5713/SITours/evening-walking-tour-sips-of-hollywood-including-street-food-and-in-los-angeles-164592.jpg', 2
        ), (
            'The Ultimate Los Angeles Bike Tour', 'Los Angeles', '6 hours', 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/5569/SITours/the-ultimate-los-angeles-bike-tour-in-los-angeles-390676.jpg', 2
        ), (
            'Hollywood - Behind the Scenes Walking Tour', 'Los Angeles', '2 hours', 'http://redlinetours.com/la/wp-content/uploads/2013/03/6761595375_91827b52be_b.jpg', 2
        ), (
            'Old and New Downtown Los Angeles Tour', 'Los Angeles', '2 hours', 'http://latimesblogs.latimes.com/.a/6a00d8341c630a53ef017ee5e94440970d-640wi', 2
        ), (
            'San Francisco Love Tour', 'San Francisco', '3 hours', 'http://sanfranciscolovetours.com/wp-content/uploads/2014/02/Yes-bus-alone-e1419537917262-1560x800_c.jpg', 3
        ), (
            'San Francisco Deluxe Half-Day City Tour', 'San Francisco ', '4 hours', 'https://xeniapp.com/wp-content/uploads/package_img/20170203113229.png', 3
        ), (
            'San Francisco City Lights Evening Tour', 'San Francisco', '4 hours', 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/6954/SITours/san-francisco-city-lights-evening-tour-in-san-francisco-161027.jpg', 3
        ), (
            'Muir Woods, Giant Redwoods and Sausalito Half-Day Trip', 'San Francisco', '6 hours', 'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2660/SITours/muir-woods-giant-redwoods-and-sausalito-half-day-trip-in-san-francisco-117268.jpg', 3
        ), (
            'Chinatown and North Beach Night Walking Tour', 'San Francisco', '6 hours', 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3327/SITours/chinatown-and-north-beach-night-walking-tour-in-san-francisco-117234.jpg', 3
        ), (
            'Little Havana Food and Walking Tour in Miami', 'Miami', '2 hours', 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/5304/SITours/little-havana-food-and-walking-tour-in-miami-in-miami-217646.jpg', 4
        ), (
            'Speedboat Sighseeing Tour of Miami', 'Miami', '2 hours', 'https://www.islandqueencruises.com/images/slider/thriller-speedboat-4.jpg', 4
        ), (
            'South Beach Cultural Food and Walking Tour', 'Miami', '3 hours', 'https://cache-graphicslib.viator.com/graphicslib/media/0a/pretty-night-photo_1838602-fit468x296.jpg', 4
        ), (
            'Chicago by Night Helicopter Tour', 'Chicago', '2 hours', 'https://media.ceetiz.com/activity/ROTCHI001/thumbnails/642x450/helicoptere-nuit-chicago-ceetiz.jpg', 5
        ), (
            'Chicago Grand Half-Day Tour', 'Chicago', '4 hours', 'https://cache-graphicslib.viator.com/graphicslib/media/a7/big-bean-photo_1021863-fit468x296.jpg', 5
        ), (
            'Chicago City Tour with Optional River Cruise', 'Chicago', '4 hours', 'https://s3.amazonaws.com/architecture-org/files/modules/chicago-architecture-foundation-river-cruise-chica-3.jpg', 5
        ), (
            'Chicago Segway Night Tour', 'Chicago', '4 hours', 'https://img.vimbly.com/images/full_photos/chicago-night-lights-generic-3.jpg', 5
        ), (
            'Chicago Crime and Mob Tour', 'Chicago', '4 hours', 'https://static1.squarespace.com/static/50ed4a16e4b09e81d2802818/t/588a1bb7d1758e07eef0aa4f/1485445978851/Chicago-Crime-Tours-Gangster-Bus.jpg', 5
        );


