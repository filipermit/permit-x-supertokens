import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ThirdPartyEmailPassword, {
	ThirdPartyEmailPasswordAuth,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import {
	Avatar,
	Text,
	Button,
	Paper,
	Notification,
	Card,
	Image,
	Group,
	Badge,
	ActionIcon,
	createStyles,
	Tooltip,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { IconCheck, IconX, IconHeart, IconCopy } from "@tabler/icons";

export default function Demo(props) {
	return (
		<ThirdPartyEmailPasswordAuth>
			<ProtectedDemoPage
				avatar={"filip.jpg"}
				name={"Filip Grebowski"}
				email={"filip@permit.io"}
				job={"Developer Advocate"}
			/>
		</ThirdPartyEmailPasswordAuth>
	);
}

// Protected page that can only be accessed after successful authentication.
function ProtectedDemoPage({ avatar, name, email, job }) {
	const [showMore, setShowMore] = useState(false);
	const [personalInfo, setPersonalInfo] = useState(false);
	const [error, setError] = useState(false);

	// Logging user out.
	const logoutClicked = async () => {
		await ThirdPartyEmailPassword.signOut();
		ThirdPartyEmailPassword.redirectToAuth();
	};

	// Permit generic permission call to the backend.
	const checkPermissions = async (action, resource) => {
		const permissionData = {
			action: action,
			resource: resource,
		};

		const hasPermission = await fetch("/api/auth/permit", {
			method: "POST",
			body: JSON.stringify(permissionData),
			headers: {
				"Content-Type": "application/json",
			},
		});

		return hasPermission;
	};

	const learnMore = async () => {
		// Checking if user can view personal info on the card resource.
		const result = await checkPermissions("view-personal-info", "card");

		if (result.status !== 403) {
			setShowMore(true);

			// Checking if user can copy their GPG key.
			const result = await checkPermissions("view-gpg-key", "card");

			if (result.status !== 403) {
				setPersonalInfo(true);
			} else {
				setPersonalInfo(false);
			}
		} else {
			setError(true);
		}
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>SuperTokens x Permit</title>
				<meta
					name="description"
					content="Demo application for SuperTokens x Permit"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				{error ? (
					<Notification
						icon={<IconX size={18} />}
						color="red"
						style={{ marginBottom: "20px" }}
						onClose={() => setError(false)}
					>
						403: You are Unauthorized to do this!
					</Notification>
				) : null}
				{showMore ? (
					<LearnMoreBadgeCard
						image={"filip.jpg"}
						title={"Filip Grebowski 👋"}
						description={
							"YouTube Creator, Engineer & Developer Advocate @ Permit.io"
						}
						country={"United Kingdom"}
						badges={[
							{ label: "Videography", emoji: "📹" },
							{ label: "Coding", emoji: "🤓" },
							{ label: "Photography", emoji: "📸" },
							{ label: "Fishing", emoji: "🎣" },
							{ label: "Snowboarding", emoji: "🏂" },
						]}
						visibility={() => setShowMore(false)}
						personalInfo={personalInfo}
					/>
				) : (
					<Paper
						radius="md"
						withBorder
						p="lg"
						sx={(theme) => ({
							backgroundColor: theme.white,
						})}
					>
						<Avatar src={avatar} size={120} radius={120} mx="auto" />
						<Text align="center" size="lg" weight={500} mt="md">
							{name}
						</Text>
						<Text align="center" color="dimmed" size="sm">
							{email} • {job}
						</Text>

						<Button variant="default" fullWidth mt="md" onClick={learnMore}>
							Learn more
						</Button>
					</Paper>
				)}

				<Button
					color="red"
					onClick={logoutClicked}
					style={{ width: "280px", marginTop: "20px" }}
				>
					Logout
				</Button>
			</main>
		</div>
	);
}

function LearnMoreBadgeCard({
	image,
	title,
	description,
	country,
	badges,
	visibility,
	personalInfo,
}) {
	const useStyles = createStyles((theme) => ({
		card: {
			width: 280,
			backgroundColor:
				theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		},

		section: {
			borderBottom: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[4]
					: theme.colors.gray[3]
			}`,
			paddingLeft: theme.spacing.md,
			paddingRight: theme.spacing.md,
			paddingBottom: theme.spacing.md,
		},

		like: {
			color: theme.colors.red[6],
		},

		label: {
			textTransform: "uppercase",
			fontSize: theme.fontSizes.xs,
			fontWeight: 700,
		},
	}));

	const { classes, theme } = useStyles();

	const features = badges.map((badge) => (
		<Badge
			color={theme.colorScheme === "dark" ? "dark" : "gray"}
			key={badge.label}
			leftSection={badge.emoji}
		>
			{badge.label}
		</Badge>
	));

	return (
		<Card withBorder radius="md" p="md" className={classes.card}>
			<Card.Section>
				<Image src={image} alt={title} height={180} />
			</Card.Section>

			<Card.Section className={classes.section} mt="md">
				<Group position="apart">
					<Text size="lg" weight={500}>
						{title}
					</Text>
					<Badge size="sm">{country}</Badge>
				</Group>
				<Text size="sm" mt="xs">
					{description}
				</Text>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Text mt="md" className={classes.label} color="dimmed">
					Hobbies
				</Text>
				<Group spacing={7} mt={5}>
					{features}
				</Group>
			</Card.Section>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				{personalInfo ? <ButtonCopy /> : null}
			</div>

			<Group mt="xs">
				<Button radius="md" style={{ flex: 1 }} onClick={visibility}>
					Back to Profile
				</Button>
				<ActionIcon variant="default" radius="md" size={36}>
					<IconHeart size={18} className={classes.like} stroke={1.5} />
				</ActionIcon>
			</Group>
		</Card>
	);
}

function ButtonCopy() {
	const clipboard = useClipboard();
	return (
		<Tooltip
			label="Key copied successfully."
			offset={5}
			position="bottom"
			radius="sm"
			transition="slide-down"
			transitionDuration={100}
			opened={clipboard.copied}
		>
			<Button
				variant="light"
				rightIcon={
					clipboard.copied ? (
						<IconCheck size={20} stroke={1.5} />
					) : (
						<IconCopy size={20} stroke={1.5} />
					)
				}
				radius="xl"
				size="xs"
				styles={{
					root: {
						paddingRight: 14,
						height: 34,
						marginTop: 20,
						marginBottom: 20,
					},
					rightIcon: { marginLeft: 22 },
				}}
				onClick={() =>
					clipboard.copy("SAMPLE KEY: DKdkdl459sl4wdsk7KDMMDdQw4w9WgXcQ")
				}
			>
				Copy GPG Key
			</Button>
		</Tooltip>
	);
}
