import { superTokensNextWrapper } from "supertokens-node/nextjs";
import { middleware } from "supertokens-node/framework/express";
import supertokens from "supertokens-node";
import { backendConfig } from "../../../config/backendConfig";

supertokens.init(backendConfig());

export default async function superTokens(req, res) {
	await superTokensNextWrapper(
		async (next) => {
			await middleware()(req, res, next);
		},
		req,
		res
	);
	if (!res.writableEnded) {
		res.status(404).send("Not found");
	}
}
