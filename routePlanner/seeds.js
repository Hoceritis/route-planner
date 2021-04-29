const mongoose = require('mongoose');
const Trip = require('./models/Trip');
require("dotenv/config");

//setting connection line
const MONGO_URI =  "mongodb://localhost/route-planner";
//process.env.MONGODB_URI ||
//setting up connection to mongo
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// initial trips
const trips = [
    {
        title: 'Erpetal',
        Description: 'Vestibulum massa augue, viverra vel varius eu, sodales at massa. Praesent elementum lacus id purus hendrerit, sed viverra lectus commodo. Donec vel enim id lectus finibus egestas non ac nisi. Donec arcu tellus, porta at enim tempus, tincidunt luctus purus. Suspendisse diam sem, luctus id ex quis, tempus tempor lacus. Nullam volutpat erat orci, ac vulputate ex convallis id. Duis pulvinar bibendum risus sit amet volutpat. Donec quis fermentum lorem.',
        Distance: 9,
        District: 'Treptow-Köpenick',
        Address: 'S-Bahn Station Hirschgarten',
        Picture: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619433648/Route%20Planner/erpetal_gt3jwd.jpg',
        Mode: 'Hike',
        location: {
            type: 'Point',
            coordinates: [52.45813934334384, 13.602637484284998]
        }
    },
    {
        title: 'Stralau',
        Description: 'Vestibulum massa augue, viverra vel varius eu, sodales at massa. Praesent elementum lacus id purus hendrerit, sed viverra lectus commodo. Donec vel enim id lectus finibus egestas non ac nisi. Donec arcu tellus, porta at enim tempus, tincidunt luctus purus. Suspendisse diam sem, luctus id ex quis, tempus tempor lacus. Nullam volutpat erat orci, ac vulputate ex convallis id. Duis pulvinar bibendum risus sit amet volutpat. Donec quis fermentum lorem.',
        Distance: 7.5,
        District: 'Friedrichshain-Kreuzberg',
        Address: 'S-Bahn Station Rummelsburg',
        Picture: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619433649/Route%20Planner/stralau_cqqyvu.jpg',
        Mode: 'Hike',
        location: {
            type: 'Point',
            coordinates: [52.501558036754155, 13.478236068942918]
        }
    },
    {
        title: 'Naturpark Südgelände',
        Description: 'Vestibulum massa augue, viverra vel varius eu, sodales at massa. Praesent elementum lacus id purus hendrerit, sed viverra lectus commodo. Donec vel enim id lectus finibus egestas non ac nisi. Donec arcu tellus, porta at enim tempus, tincidunt luctus purus. Suspendisse diam sem, luctus id ex quis, tempus tempor lacus. Nullam volutpat erat orci, ac vulputate ex convallis id. Duis pulvinar bibendum risus sit amet volutpat. Donec quis fermentum lorem.',
        Distance: 5,
        District: 'Tempelhof-Schöneberg',
        Address: 'Prellerweg 47-49, 12157 Berlin',
        Picture: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619433649/Route%20Planner/naturpark_exjlzc.jpg',
        Mode: 'Hike',
        location: {
            type: 'Point',
            coordinates: [52.45920595244466, 13.358197607036761]
        }
    },
    {
        title: 'Pfaueninsel',
        Description: 'Vestibulum massa augue, viverra vel varius eu, sodales at massa. Praesent elementum lacus id purus hendrerit, sed viverra lectus commodo. Donec vel enim id lectus finibus egestas non ac nisi. Donec arcu tellus, porta at enim tempus, tincidunt luctus purus. Suspendisse diam sem, luctus id ex quis, tempus tempor lacus. Nullam volutpat erat orci, ac vulputate ex convallis id. Duis pulvinar bibendum risus sit amet volutpat. Donec quis fermentum lorem.',
        Distance: 11,
        District: 'Steglitz-Zehlendorf',
        Address: 'S-Bahn Station Wannsee',
        Picture: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619433647/Route%20Planner/pfaueninsel_pnv9dr.jpg',
        Mode: 'Hike',
        location: {
            type: 'Point',
            coordinates: [52.42148045323667, 13.178954795923493]
        }
    },
    {
        title: 'Teltowkanal',
        Description: 'Vestibulum massa augue, viverra vel varius eu, sodales at massa. Praesent elementum lacus id purus hendrerit, sed viverra lectus commodo. Donec vel enim id lectus finibus egestas non ac nisi. Donec arcu tellus, porta at enim tempus, tincidunt luctus purus. Suspendisse diam sem, luctus id ex quis, tempus tempor lacus. Nullam volutpat erat orci, ac vulputate ex convallis id. Duis pulvinar bibendum risus sit amet volutpat. Donec quis fermentum lorem.',
        Distance: 37,
        District: 'Treptow-Köpenick',
        Address: 'S-Bahn Station Treptower Park',
        Picture: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619433649/Route%20Planner/teltowkanal_dxgiol.jpg',
        Mode: 'Bike',
        location: {
            type: 'Point',
            coordinates: [52.49408215581487, 13.461433798110319]
        } 
    },
    {
        title: 'Sacrow',
        Description: 'Vestibulum massa augue, viverra vel varius eu, sodales at massa. Praesent elementum lacus id purus hendrerit, sed viverra lectus commodo. Donec vel enim id lectus finibus egestas non ac nisi. Donec arcu tellus, porta at enim tempus, tincidunt luctus purus. Suspendisse diam sem, luctus id ex quis, tempus tempor lacus. Nullam volutpat erat orci, ac vulputate ex convallis id. Duis pulvinar bibendum risus sit amet volutpat. Donec quis fermentum lorem.',
        Distance: 20,
        District: 'Tempelhof-Schöneberg',
        Address: 'S-Bahn Station Wannsee',
        Picture: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619433649/Route%20Planner/sacrow_hiszib.jpg',
        Mode: 'Bike',
        location: {
            type: 'Point',
            coordinates: [52.42148045323667, 13.178954795923493]
        }
    },
    {
        title: 'Eiskeller',
        Description: 'Vestibulum massa augue, viverra vel varius eu, sodales at massa. Praesent elementum lacus id purus hendrerit, sed viverra lectus commodo. Donec vel enim id lectus finibus egestas non ac nisi. Donec arcu tellus, porta at enim tempus, tincidunt luctus purus. Suspendisse diam sem, luctus id ex quis, tempus tempor lacus. Nullam volutpat erat orci, ac vulputate ex convallis id. Duis pulvinar bibendum risus sit amet volutpat. Donec quis fermentum lorem.',
        Distance: 34,
        District: 'Spandau',
        Address: 'S-Bahn Station Spandau',
        Picture: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619433649/Route%20Planner/eiskeller_w2yo3v.png',
        Mode: 'Bike',
        location: {
            type: 'Point',
            coordinates: [52.534689502947664, 13.19793764229167]
        }
    },
    {
        title: 'Oberhavelsteg',
        Description: 'Vestibulum massa augue, viverra vel varius eu, sodales at massa. Praesent elementum lacus id purus hendrerit, sed viverra lectus commodo. Donec vel enim id lectus finibus egestas non ac nisi. Donec arcu tellus, porta at enim tempus, tincidunt luctus purus. Suspendisse diam sem, luctus id ex quis, tempus tempor lacus. Nullam volutpat erat orci, ac vulputate ex convallis id. Duis pulvinar bibendum risus sit amet volutpat. Donec quis fermentum lorem.',
        Distance: 34,
        District: 'Reinickendorf',
        Address: 'S-Bahn Station Karl-Bonhoeffer-Nervenklinik',
        Picture: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619433650/Route%20Planner/oberhavelsteg_cokjqq.jpg',
        Mode: 'Bike',
        location: {
            type: 'Point',
            coordinates: [52.578808148275634, 13.332817498113887]
        }
    },
    {
        title: 'Grunewaldloop',
        Description: 'Vestibulum massa augue, viverra vel varius eu, sodales at massa. Praesent elementum lacus id purus hendrerit, sed viverra lectus commodo. Donec vel enim id lectus finibus egestas non ac nisi. Donec arcu tellus, porta at enim tempus, tincidunt luctus purus. Suspendisse diam sem, luctus id ex quis, tempus tempor lacus. Nullam volutpat erat orci, ac vulputate ex convallis id. Duis pulvinar bibendum risus sit amet volutpat. Donec quis fermentum lorem.',
        Distance: 70,
        District: 'Charlottenburg-Wilmersdorf',
        Address: 'U-Bahn Station Konstanzer Straße',
        Picture: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619433650/Route%20Planner/grunewaldloop_ex8cmr.jpg',
        Mode: 'Bike',
        location: {
            type: 'Point',
            coordinates: [52.49415591996668, 13.310055271125922]
        }
    },
    {
        title: 'Tegler Fließ',
        Description: 'Vestibulum massa augue, viverra vel varius eu, sodales at massa. Praesent elementum lacus id purus hendrerit, sed viverra lectus commodo. Donec vel enim id lectus finibus egestas non ac nisi. Donec arcu tellus, porta at enim tempus, tincidunt luctus purus. Suspendisse diam sem, luctus id ex quis, tempus tempor lacus. Nullam volutpat erat orci, ac vulputate ex convallis id. Duis pulvinar bibendum risus sit amet volutpat. Donec quis fermentum lorem.',
        Distance: 25,
        District: 'Reinickendorf',
        Address: 'S-Bahn Station Waidmannslust',
        Picture: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619433653/Route%20Planner/tegeler-fliess_f7g3pj.jpg',
        Mode: 'Hike',
        location: {
            type: 'Point',
            coordinates: [52.60668755068947, 13.320905526951048]
        }
    }
];

// seeding the database

Trip.insertMany(trips)
    .then(trip => {
        console.log(trip);
        mongoose.connection.close();
    });