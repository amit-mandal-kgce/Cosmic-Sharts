const {username, password} = process.env;
const { username: envUsername } = process.env;

// export const connectionMong = "mongodb+srv://"+username+":"+password+"@cluster0.khet3kq.mongodb.net/shopdetails?retryWrites=true&w=majority"
// export const connectionMongo = "mongodb+srv://"+username+":"+password+"@cluster0.ndsgp6w.mongodb.net/productONMDB?retryWrites=true&w=majority"

export const connectionMongo = "mongodb+srv://"+envUsername+":"+password+"@cluster0.ndsgp6w.mongodb.net/productONMDB?retryWrites=true&w=majority";