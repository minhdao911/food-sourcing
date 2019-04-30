
const Product = require('../food-sourcing/database/models/product');
const mongoose = require('mongoose');



const product1 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "farming",
    date: "2018-07-14T22:58:25.000Z",
    amount: 2000,
    location: "Po Box 423, Jayton, TX, 79528",
    transportFrom: null,
    transportTo: null,
    cost: "$1890.00",
    hash: 'afsdfdsfsdfasda323',
    preHash: '0'
});
Product.create(product1, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});


const product2 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-05T22:58:25.000Z",
    amount: 1500,
    location: "Po Box 423, Jayton, TX, 79528",
    transportFrom: "Po Box 423, Jayton, TX, 79528",
    transportTo: "1 First American Way, Santa Ana, CA, 92707",
    cost: "$450.00",
    hash: 'awcneulwnfi42kdi',
    preHash: 'afsdfdsfsdfasda323'
    
});
Product.create(product2, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});
const product3 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-05T23:58:25.000Z",
    amount: 500,
    location: "Po Box 423, Jayton, TX, 79528",
    transportFrom: "Po Box 423, Jayton, TX, 79528",
    transportTo: "1507 Nolan St, San Antonio, TX, 78202",
    cost: "$175.00",
    hash: 'acnekdi5ej3u',
    preHash: 'awcneulwnfi42kdi'
})
Product.create(product3, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});
const product4 = new Product({
    _id: new mongoose.Types.ObjectId(),
    id: mongoose.Schema.Types.ObjectId,
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-06T10:58:25.000Z",
    amount: 500,
    location: "1507 Nolan St, San Antonio, TX, 78202",
    transportFrom: "Po Box 423, Jayton, TX, 79528",
    transportTo: "1507 Nolan St, San Antonio, TX, 78202",
    cost: null,
    hash: 'fbievleumd78ej',
    preHash: 'awcneulwnfi42kdi'
})
Product.create(product4, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});
const product5 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-07T11:58:25.000Z",
    amount: 1500,
    location: "1 First American Way, Santa Ana, CA, 92707",
    transportFrom: "Po Box 423, Jayton, TX, 79528",
    transportTo: "1 First American Way, Santa Ana, CA, 92707",
    cost: null,
    hash: 'keucmeyiwl98che7',
    preHash: 'fbievleumd78ej'
})
Product.create(product5, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});

const product6 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "processing",
    date: "2018-12-07T13:58:25.000Z",
    amount: 1,
    location: "1507 Nolan St, San Antonio, TX, 78202",
    transportFrom: null,
    transportTo: null,
    cost: "$2.00",
    hash: 'y37db38ciw9',
    preHash: 'keucmeyiwl98che7'
})
Product.create(product6, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});

const product7 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-08T08:58:25.000Z",
    amount: 500,
    location: "1507 Nolan St, San Antonio, TX, 78202",
    transportFrom: "1507 Nolan St, San Antonio, TX, 78202",
    transportTo: "5025 Northwest Loop 410, San Antonio, TX, 78229",
    cost: "$85.00",
    hash: 'naweivvashi34',
    preHash: 'y37db38ciw9'
})
Product.create(product7, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});

const product8 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "processing",
    date: "2018-12-08T10:58:25.000Z",
    amount: 1,
    location: "1 First American Way, Santa Ana, CA, 92707",
    transportFrom: null,
    transportTo: null,
    cost: "$2.10",
    hash: 'naywndiwo245',
    preHash: 'naweivvashi34'
})
Product.create(product8, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});
    
const product9 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-08T14:58:25.000Z",
    amount: 500,
    location: "5025 Northwest Loop 410, San Antonio, TX, 78229",
    transportFrom: "1507 Nolan St, San Antonio, TX, 78202",
    transportTo: "5025 Northwest Loop 410, San Antonio, TX, 78229",
    cost: null,
    hash: 'ieymciwnfy37',
    preHash: 'naywndiwo245'
})
Product.create(product9, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});

const product10 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-09T09:58:25.000Z",
    amount: 1500,
    location: "1 First American Way, Santa Ana, CA, 92707",
    transportFrom: "1 First American Way, Santa Ana, CA, 92707",
    transportTo: "3600 W McFadden Ave, Santa Ana, CA, 92704",
    cost: "$120.00",
    hash: 'nd2ofkeu49d3',
    preHash: 'ieymciwnfy37'
})
Product.create(product10, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});

const product11 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "consuming",
    date: "2018-12-09T10:58:25.000Z",
    amount: 1,
    location: "5025 Northwest Loop 410, San Antonio, TX, 78229",
    transportFrom: null,
    transportTo: null,
    cost: "$2.15",
    hash: 'cabdvoafviu4',
    preHash: 'nd2ofkeu49d3'
})
Product.create(product11, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});
const product12 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-09T18:58:25.000Z",
    amount: 1500,
    location: "3600 W McFadden Ave, Santa Ana, CA, 92704",
    transportFrom: "1 First American Way, Santa Ana, CA, 92707",
    transportTo: "3600 W McFadden Ave, Santa Ana, CA, 92704",
    cost: null,
    hash: 'afbndfoje3f03k',
    preHash: 'cabdvoafviu4'
})
Product.create(product12, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});
const product13 = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "consuming",
    date: "2018-12-10T08:58:25.000Z",
    amount: 1,
    location: "3600 W McFadden Ave, Santa Ana, CA, 92704",
    transportFrom: null,
    transportTo: null,
    cost: "$2.89",
    hash: 'vuemcaovno4',
    preHash: 'afbndfoje3f03k'
})
Product.create(product13, err => {
    if(err) console.log(err);
    else 
        console.log('added product');
});

Product.find({}, (err, p) => {
    if(err) console.log(err);
    else{
        console.log(p)
    }
})