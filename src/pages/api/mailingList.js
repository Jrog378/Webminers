import axios from "axios";

export default async function handler(req, res) {
    if (req.method === "PUT") {
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
                        "Your email has been succesfully added to the mailing list. Welcome 👋",
                });
            })
            .catch((err) => {
                res.status(500).send({
                    message:
                        "Oups, there was a problem with your subscription, please try again or contact us",
                });
            });
    }
}