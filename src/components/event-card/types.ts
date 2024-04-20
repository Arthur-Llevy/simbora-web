type EventCardProps = {
	name: string;
	type: "outdoors" | "music" | "games";
	localization: string;
	startsAt: string;
	isFavorited: boolean;
	endsAt: string
	linkTo: string;
};

export type { EventCardProps }