import { Permit } from "permitio";
import { superTokensNextWrapper } from "supertokens-node/nextjs";
import { verifySession } from "supertokens-node/recipe/session/framework/express";

async function verifyAndFetchGPGKey(req, res) {
	// Verify that a user is authenticated by checking the session.
	await superTokensNextWrapper(
		async (next) => {
			await verifySession()(req, res, next);
		},
		req,
		res
	);

	const GPGKey = "DKdkdl459sl4wdsk7KDMMDdQw4w9WgXcQ";

	// Permit PDP instance.
	const permit = new Permit({
		pdp: "http://localhost:7766",
		// Permit SDK Key
		token: process.env.PERMIT_IO_KEY,
	});

	// Permit permission check.
	const permitted = await permit.check(
		req.session.getUserId(),
		"view-gpg-key",
		{
			type: "card",
			tenant: "SuperTokens",
		}
	);

	if (permitted) {
		res.status(200).send({ gpg: GPGKey });
	} else {
		res.status(403).send("Unauthorized");
	}
}

export default verifyAndFetchGPGKey;
