const mongoose = require("mongoose")

const conn = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log('DB Connected')
    }
    catch (e) {
        console.log(e)
    }
}
conn()