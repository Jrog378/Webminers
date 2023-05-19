import axios from "axios";
export default async function handler(req, res) {
    if (req.method === "PUT") {
        axios
            .put(
                "https://api.sendgrid.com/v3/marketing/contacts",
                {
                    contacts: [{email: `${req.body.mail}`, first_name: 'Removed'}],
                    list_ids: ['cb80dd0b-8471-42ef-8012-3f715df71a1d'],
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
                        "Your email has been successfully removed from the mailing list.",
                });
            })
            .catch((err) => {
                res.status(500).send({
                    message:
                        "Oops, there was a problem with your unsubscribe, please try again or contact us",
                });
            });
    }
}