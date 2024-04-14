type EventType = {
	id: string;
	name: string;
	type: "outdoors" | "music" | "games";
	localization: string;
	startsAt: string;
	isFavorited: boolean;
	endsAt: string
};

export type { EventType }