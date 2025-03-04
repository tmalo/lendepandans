import { Download, Globe, MapPin, Users } from "lucide-react"
import InfoCard from "./info-card"


export default async function CommunitySection() {
	return (
		<section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-black">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4 font-heading">REJOIGNEZ LE MOUVEMENT</h2>
					<p className="max-w-2xl mx-auto text-gray-400 font-body">
						Connectez-vous avec d'autres joueurs, partagez des stratégies et restez informé des tournois et des
						extensions.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					<InfoCard variant="hover" title="FORUMS" description="Discutez stratégie, constructions de deck et histoire du jeu" IconComponent={Globe} />
					<InfoCard variant="hover" title="TROUVER DES ÉVÉNEMENTS" description="Localisez les tournois et groupes de jeu près de chez vous" IconComponent={MapPin} />
					<InfoCard variant="hover" title="DISCORD" description="Rejoignez notre communauté active de joueurs" IconComponent={Users} />
					<InfoCard variant="hover" title="RESSOURCES" description="Téléchargez les règles, listes de cartes et plus encore" IconComponent={Download} />
				</div>
			</div>
		</section>
	)
}