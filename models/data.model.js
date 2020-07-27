module.exports = mongoose => {
    const Data = mongoose.model(
        "data",
        mongoose.Schema(
            {
                firstName:String,
                lastName:String,
                email:String,
                description:String
            },{ collection : 'users' }
        )
    )

    return Data
}