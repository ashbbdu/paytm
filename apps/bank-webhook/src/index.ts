

import express, { Request, Response } from 'express'
import db from "@repo/db"

const app = express();
const PORT = 4000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hii There")
})

app.post("/hdfcWebhook", (req, res) => {
    //TODO: Add zod validation here?
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    // Update balance in db, add txn
    db.balance.update({
        where: {
            userId: paymentInformation.userId
        }, data: {
            amount: {
                increment: paymentInformation.amount
            }
        }
    })
})

app.listen(4000, () => {
    console.log(`App is running on PORT : ${PORT}`);
})