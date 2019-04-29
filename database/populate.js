
const Prodcut = require('../database/models/product');
const mongoose = require('mongoose');

const product1 = new Prodcut({
    id: "5cc10240fc13ae75e0000000",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "farming",
    date: "2018-07-14T22:58:25.000Z",
    amount: 2000,
    location: "Po Box 423, Jayton, TX, 79528",
    transportFrom: null,
    transportTo: null,
    cost: "$1890.00"
});
product1.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));

const product2 = new Prodcut({
    id: "5cc10240fc13ae75e0000001",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-05T22:58:25.000Z",
    amount: 1500,
    location: "Po Box 423, Jayton, TX, 79528",
    transportFrom: "Po Box 423, Jayton, TX, 79528",
    transportTo: "1 First American Way, Santa Ana, CA, 92707",
    cost: "$450.00"
});
product2.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));
const product3 = new Prodcut({
    id: "5cc10240fc13ae75e0000003",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-05T23:58:25.000Z",
    amount: 500,
    location: "Po Box 423, Jayton, TX, 79528",
    transportFrom: "Po Box 423, Jayton, TX, 79528",
    transportTo: "1507 Nolan St, San Antonio, TX, 78202",
    cost: "$175.00"
})
product3.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));
const product4 = new Prodcut({
    id: "5cc10240fc13ae75e0000003",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-06T10:58:25.000Z",
    amount: 500,
    location: "1507 Nolan St, San Antonio, TX, 78202",
    transportFrom: "Po Box 423, Jayton, TX, 79528",
    transportTo: "1507 Nolan St, San Antonio, TX, 78202",
    cost: null
})
product4.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));

const product5 = new Prodcut({
    id: "5cc10240fc13ae75e0000001",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-07T11:58:25.000Z",
    amount: 1500,
    location: "1 First American Way, Santa Ana, CA, 92707",
    transportFrom: "Po Box 423, Jayton, TX, 79528",
    transportTo: "1 First American Way, Santa Ana, CA, 92707",
    cost: null
})
product5.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));

const product6 = new Prodcut({
    id: "5cc10240fc13ae75e0000006",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "processing",
    date: "2018-12-07T13:58:25.000Z",
    amount: 1,
    location: "1507 Nolan St, San Antonio, TX, 78202",
    transportFrom: null,
    transportTo: null,
    cost: "$2.00"
})
product6.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));

const product7 = new Prodcut({
    id: "5cc10240fc13ae75e0000007",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-08T08:58:25.000Z",
    amount: 500,
    location: "1507 Nolan St, San Antonio, TX, 78202",
    transportFrom: "1507 Nolan St, San Antonio, TX, 78202",
    transportTo: "5025 Northwest Loop 410, San Antonio, TX, 78229",
    cost: "$85.00"
})
product7.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));

const product8 = new Prodcut({
    id: "5cc10240fc13ae75e0000002",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "processing",
    date: "2018-12-08T10:58:25.000Z",
    amount: 1,
    location: "1 First American Way, Santa Ana, CA, 92707",
    transportFrom: null,
    transportTo: null,
    cost: "$2.10"
})
product8.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));
    
const product9 = new Prodcut({
    id: "5cc10240fc13ae75e0000007",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-08T14:58:25.000Z",
    amount: 500,
    location: "5025 Northwest Loop 410, San Antonio, TX, 78229",
    transportFrom: "1507 Nolan St, San Antonio, TX, 78202",
    transportTo: "5025 Northwest Loop 410, San Antonio, TX, 78229",
    cost: null
})
product9.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));

const product10 = new Prodcut({
    id: "5cc10240fc13ae75e0000004",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-09T09:58:25.000Z",
    amount: 1500,
    location: "1 First American Way, Santa Ana, CA, 92707",
    transportFrom: "1 First American Way, Santa Ana, CA, 92707",
    transportTo: "3600 W McFadden Ave, Santa Ana, CA, 92704",
    cost: "$120.00"
})
product10.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));

const product11 = new Prodcut({
    id: "5cc10240fc13ae75e0000009",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "consuming",
    date: "2018-12-09T10:58:25.000Z",
    amount: 1,
    location: "5025 Northwest Loop 410, San Antonio, TX, 78229",
    transportFrom: null,
    transportTo: null,
    cost: "$2.15"
})
product11.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));

const product12 = new Prodcut({
    id: "5cc10240fc13ae75e0000004",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "transportation",
    date: "2018-12-09T18:58:25.000Z",
    amount: 1500,
    location: "3600 W McFadden Ave, Santa Ana, CA, 92704",
    transportFrom: "1 First American Way, Santa Ana, CA, 92707",
    transportTo: "3600 W McFadden Ave, Santa Ana, CA, 92704",
    cost: null
})
product12.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));

const product13 = new Prodcut({
    id: "5cc10240fc13ae75e0000005",
    name: "avocado",
    qrcode: "1Pb1xDCsnDriC8dYQYaJPJ7Dkr784LJNXD",
    stage: "consuming",
    date: "2018-12-10T08:58:25.000Z",
    amount: 1,
    location: "3600 W McFadden Ave, Santa Ana, CA, 92704",
    transportFrom: null,
    transportTo: null,
    cost: "$2.89"
})
product13.save().then(result => {
    console.log(result);
})
.catch(err => console.log(err));
{
