import {buffer} from "micro";
import Stripe from "stripe";

const admin = require('firebase-admin');

const serviceAccount = require("../../../webminers-7a36d-firebase-adminsdk-6f6gc-2f032a4e01.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://webminers-7a36d-default-rtdb.firebaseio.com"
});

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = new Stripe('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', {
    apiVersion: "2020-08-27",
});
const webhookSecret = 'whsec_Qidc89IoJrpnsu1Gp4whPbX5ZENVUhl6';
export const config = {
    api: {
        bodyParser: false,
    },
};
export default async function handler(req, res) {

    if (req.method === "POST") {
        const buf = await buffer(req);
        const sig = req.headers["stripe-signature"];


        let event;

        try {
            event = await stripe.webhooks.constructEvent(buf, sig, webhookSecret);
        } catch (err) {
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }


        if (event.type === "customer.subscription.created") {
            console.log('Created')
            // Handle Created Subscription

            const charge1 = event.data.object;
            let webplan1 = ''
            if (event.type === "customer.subscription.created" || event.type === "customer.subscription.updated") {
                console.log(charge1['customer'])
                if (charge1['plan']['product'] === 'prod_NQ2zH4iXcDUl2n') {
                    console.log('Seasonalist')
                    webplan1 = 'Seasonalist'
                } else if (charge1['plan']['product'] === 'prod_NQ311iEHIEp7jE') {
                    console.log('Investor')
                    webplan1 = 'Investor'
                } else if (charge1['plan']['product'] === 'prod_NQ35gcdCurUhVH') {
                    console.log('Strategist')
                    webplan1 = 'Strategist'
                } else {
                    console.log('Unknown Plan')
                }
            }

            const customer1 = await stripe.customers.retrieve(charge1['customer']);
            console.log(customer1['email'])

            let UserID1 = ''

            await admin.auth().getUserByEmail(customer1['email'])
                .then(function (userRecord) {
                    console.log("Successfully fetched user data:", userRecord.toJSON());
                    UserID1 = userRecord['uid']
                })
                .catch(function (error) {
                    console.log("Error fetching user data:", error);
                });

            await admin.firestore().collection('users').doc(UserID1).update({plan: webplan1})

            console.log('Added ' + webplan1)
        } else if (event.type === "customer.subscription.deleted") {
            console.log('Cancel')
            // Handle Deleted Subscription

            const charge2 = event.data.object;

            const customer2 = await stripe.customers.retrieve(charge2['customer']);
            console.log(customer2['email'])

            let UserID2 = ''

            await admin.auth().getUserByEmail(customer2['email'])
                .then(function (userRecord) {
                    console.log("Successfully fetched user data:", userRecord.toJSON());
                    UserID2 = userRecord['uid']
                })
                .catch(function (error) {
                    console.log("Error fetching user data:", error);
                });

            await admin.firestore().collection('users').doc(UserID2).update({plan: 'none'})

            console.log('Removed Plan')
        } else if (event.type === "customer.subscription.updated") {
            // Handle successful subscription update

            const charge3 = event.data.object;
            let cancel = charge3['cancel_at']
            console.log(charge3)
            let webplan3 = ''
            if (event.type === "customer.subscription.created" || event.type === "customer.subscription.updated") {
                console.log(charge3['customer'])
                if (charge3['plan']['product'] === 'prod_NL75Mz1Lv1a99x') {
                    console.log('Seasonalist')
                    webplan3 = 'Seasonalist'
                } else if (charge3['plan']['product'] === 'prod_NL75ETJPk8RA5g') {
                    console.log('Investor')
                    webplan3 = 'Investor'
                } else if (charge3['plan']['product'] === 'prod_NOpiiZZAQRUEpP') {
                    console.log('Strategist')
                    webplan3 = 'Strategist'
                } else {
                    console.log('Unknown Plan')
                }
            }

            const customer3 = await stripe.customers.retrieve(charge3['customer']);
            console.log(customer3['email'])

            let UserID3 = ''

            await admin.auth().getUserByEmail(customer3['email'])
                .then(function (userRecord) {
                    console.log("Successfully fetched user data:", userRecord.toJSON());
                    UserID3 = userRecord['uid']
                })
                .catch(function (error) {
                    console.log("Error fetching user data:", error);
                });

            if (cancel !== null) {
                await admin.firestore().collection('users').doc(UserID3).update({plan: 'none'})
            } else {
                await admin.firestore().collection('users').doc(UserID3).update({plan: webplan3})
            }

        } else {
            console.warn(`Unhandled event type: ${event.type}`);
        }
        res.json({received: true});
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};