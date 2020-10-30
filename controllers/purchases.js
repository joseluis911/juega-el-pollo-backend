
const Purchase = require('../models/purchase');

exports.getPurchases = (req, res, next) => {
    Purchase.find()
        .then(purchases => {
            res.status(200).json({
               message: 'se trajeron los datos correctamente',
               purchases: purchases
            })
        })


}


exports.newPurchase = (req, res, next) => {

    const ticketsPurchased = req.body.ticketsPurchased;
    const totalPurchased = req.body.totalPurchased;
   

    const purchase = new Purchase({
        ticketsPurchased: ticketsPurchased,
        totalPurchased: totalPurchased,
        buyer: {
            userName: 'Jose Luis Santiago Marquez'
        }
    })
    purchase.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Purchase order made succesfully",
                purchase: result

            })
        })
        .catch(err => console.log(err))

}