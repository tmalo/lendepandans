const newsEvents = [
	{
		id: "1a2b3c4d-1111-2222-3333-444455556666",
		img: "https://placehold.co/400x200",
		alt: "Annonce de tournoi",
		date: "15 mai 2025",
		title: "Championnat National Annoncé",
		description:
			"Affrontez les meilleurs joueurs et gagnez des cartes promotionnelles exclusives mettant en vedette des héros révolutionnaires.",
		link: "#",
	},
	{
		id: "2b3c4d5e-1111-2222-3333-444455556666",
		img: "https://placehold.co/400x200",
		alt: "Nouveau set de cartes",
		date: "28 avril 2025",
		title: "Nouveau Set de Cartes : \"Renaissance Culturelle\"",
		description:
			"Explorez le pouvoir de l'art, de la musique et de la littérature dans le mouvement d'indépendance avec 60 nouvelles cartes.",
		link: "#",
	},
	{
		id: "3c4d5e6f-1111-2222-3333-444455556666",
		img: "https://placehold.co/400x200",
		alt: "Événement communautaire",
		date: "10 avril 2025",
		title: "Focus Communautaire : Guide Stratégique",
		description:
			"La championne Marie Dubois partage ses conseils pour maîtriser la faction du Syndicat des Travailleurs.",
		link: "#",
	},
];

export async function GET(request: Request) {
	return Response.json(newsEvents);
}