import axios from "axios";
export default async function handler(req, res) {
    if (req.method === "PUT") {
        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey('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')
        const msg = {
            to: `${req.body.mail}`, // Change to your recipient
            from: 'webminers.dev@gmail.com', // Change to your verified sender
            template_id:"d-ce8123f7cbbe42f0986c13947b4cb0f2"
        }
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })

        axios
            .put(
                "https://api.sendgrid.com/v3/marketing/contacts",
                {
                    contacts: [{email: `${req.body.mail}`}],
                    list_ids: ['db53fad6-f1fb-4291-94b5-689dd8c43424'],
                },
                {
                    headers: {
                        "content-type": "application/json",
                        Authorization: 'Bearer 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',
                    },
                }
            )
            .then((result) => {
                res.status(200).send({
                    message:
                        "Your email has been successfully added to the mailing list. Welcome 👋",
                });
            })
            .catch((err) => {
                res.status(500).send({
                    message:
                        err,
                });
            });
    }
}