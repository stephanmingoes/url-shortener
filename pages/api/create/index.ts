import type {NextApiRequest, NextApiResponse} from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        res.json({});

    } catch (e) {
        console.log(e)
    }

}
