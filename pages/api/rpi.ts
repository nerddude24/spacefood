import { NextApiRequest, NextApiResponse } from "next";
import data from "./data";

// * Recipe Programming Interface
export default function (req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		res.status(200).json({ status: "ok", items: data });
	}
}
