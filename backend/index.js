const express = require('express');
const app = express();

const port = require('./config').port;
const stripe_sk = require('./config').stripe_sk;


const userRouter = require('./routers/userManager');
const equipmentRouter = require('./routers/equipmentManager');
const staffRouter = require('./routers/staffManager');
const utilRouter = require('./routers/utils');
const reviewRouter = require('./routers/reviewManager');
const orderRouter = require('./routers/orderManager');
const nursingRouter = require('./routers/nursingManager');
const rentRouter = require('./routers/rentManager');
const contactRouter = require('./routers/contactManager');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/equipment', equipmentRouter);
app.use('/util', utilRouter);
app.use('/staff', staffRouter);
app.use('/review', reviewRouter);
app.use('/order', orderRouter);
app.use('/nursing', nursingRouter);
app.use('/rent', rentRouter);
app.use('/contact', contactRouter);

app.use(express.static('./uploads'));

app.get('/home', (req, res) => {
    res.send("Welcome Home");
})

const stripe = require("stripe")(stripe_sk);

app.post("/create-payment-intent", async (req, res) => {
    const data = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: data.amount,
        currency: 'inr'
    });
    res.status(200).json(paymentIntent);
});

app.listen(port, () => {
    console.log('server started at port 5000')
})