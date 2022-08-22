import ThirdPartyEmailPasswordNode from "supertokens-node/recipe/thirdpartyemailpassword";
import SessionNode from "supertokens-node/recipe/session";
import { appInfo } from "./appInfo";
import { Permit } from "permitio";

const permit = new Permit({
	pdp: "http://localhost:7766",
	token: process.env.PERMIT_IO_KEY,
});

async function registerUserInPermit(id, email) {
	let roles = [
		{
			role: "Stranger",
			tenant: "SuperTokens",
		},
	];

	// Assign roles based on email address (if part of Permit or Supertokens).
	if (/@supertokens.com\s*$/.test(email) || /@permit.io\s*$/.test(email)) {
		roles = [
			{
				role: "Friend",
				tenant: "SuperTokens",
			},
		];
	}

	// Add a user during first-time signup to Permit.
	await permit.write(
		permit.api.syncUser({
			key: id,
			email,
			roles,
		})
	);
}

export const backendConfig = () => {
	return {
		framework: "express",
		supertokens: {
			connectionURI: "https://try.supertokens.com",
		},
		appInfo,
		recipeList: [
			ThirdPartyEmailPasswordNode.init({
				// Intercept point between authentication provided by Supertokens and
				// authorization provided by Permit.
				override: {
					apis: (oI) => {
						return {
							...oI,
							thirdPartySignInUpPOST: async function (input) {
								let response = await oI.thirdPartySignInUpPOST(input);
								if (response.status === "OK") {
									if (response.createdNewUser) {
										await registerUserInPermit(
											response.user.id,
											response.user.email
										);
									}
								}
								return response;
							},
							emailPasswordSignUpPOST: async function (input) {
								let response = await oI.emailPasswordSignUpPOST(input);
								if (response.status === "OK") {
									await registerUserInPermit(
										response.user.id,
										response.user.email
									);
								}
								return response;
							},
						};
					},
				},
				providers: [
					// We have provided you with development keys which you can use for testing.
					// IMPORTANT: Please replace them with your own OAuth keys for production use.
					ThirdPartyEmailPasswordNode.Google({
						clientId:
							"1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
						clientSecret: "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",
					}),
					ThirdPartyEmailPasswordNode.Github({
						clientId: "467101b197249757c71f",
						clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd",
					}),
				],
			}),
			SessionNode.init(),
		],
		isInServerlessEnv: true,
	};
};
