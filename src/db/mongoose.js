const mongoose = require('mongoose');
const uri = "mongodb+srv://camilanieto:4944208@cluster0.llvyt.mongodb.net/origen?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});