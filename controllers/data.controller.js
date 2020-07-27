const db = require("../models")

const allData = db.data

exports.create = (req,res) => {
    const data = new allData({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                description:req.body.description
    })

    data.save(data)
    .then(item => {
        res.send(item)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'Some error ocurred.'
        })
    })

}

