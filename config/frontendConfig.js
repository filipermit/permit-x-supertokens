import ThirdPartyEmailPasswordReact from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import SessionReact from "supertokens-auth-react/recipe/session";
import { appInfo } from "./appInfo";

export const frontendConfig = () => {
	return {
		appInfo,
		recipeList: [
			ThirdPartyEmailPasswordReact.init({
				signInAndUpFeature: {
					providers: [
						ThirdPartyEmailPasswordReact.Google.init(),
						ThirdPartyEmailPasswordReact.Github.init(),
					],
				},
				// Redirect user to specific domain after successful authentication.
				getRedirectionURL: async (context) => {
					if (context.action === "SUCCESS") {
						if (context.redirectToPath !== undefined) {
							return context.redirectToPath;
						}
						return "/demo";
					}
					return undefined;
				},
			}),
			SessionReact.init(),
		],
	};
};
