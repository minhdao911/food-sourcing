const express = require('express'),
      router  = express.Router();

const SupplyChain = require('../core/SupplyChain');
const products = require('../utils/product.json');

//get supplychain of product with name
//path -> /name?v=&loc=
router.get("/pname", (req, res) => {
    let name = req.query.v;
    let loc = req.query.loc;
    let sc = new SupplyChain(name);
    let chain = [];
    products.forEach(record => {
        if(record.name === name){
            switch(record.stage){
                case "farming":
                    sc.origin = record.location;
                    chain.push([record]);
                    break;
                case "processing":
                    for(let c of chain){
                        if(c[c.length-1].location === record.location){
                            c.push(record);
                            break;
                        }
                    };
                    break;
                case "transportation":
                    let b = false;
                    for(let c of chain){
                        if(!c[c.length-1].transportTo){
                            if(c[c.length-1].location === record.transportFrom){
                                c.push(record);
                                b = false;
                                break;
                            }
                        }else if(c[c.length-1].transportTo === record.location){
                            c.push(record);
                            b = false;
                            break;
                        }else
                            b = true;
                    };
                    if(b) chain.push([record]);
                    break;
                case "consuming":       
                    for(let c of chain){
                        if(c[c.length-1].location === record.location){
                            c.push(record);
                            break;
                        }
                    };
                    break;
            }
        }
    });
    for(let c of chain){
        if(c[c.length-1].location === loc){
            sc.chain = c;
            break;
        }
    }
    res.json(sc);
});

module.exports = router;