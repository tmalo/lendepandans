import { History, Shield, Users } from "lucide-react" 
import InfoCard from "./info-card"


export default async function GameFeaturesSection() {
	return (
		<section className="py-16 bg-[#0a0a0a]">
		<div className="container mx-auto px-4">
			<h2 className="text-3xl font-bold mb-12 text-center font-heading">
				GAMEPLAY STRATÉGIQUE, PROFONDEUR HISTORIQUE
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<InfoCard variant="default" IconComponent={History} title="HISTOIRE AUTHENTIQUE" description="Basé sur des événements et des personnages réels du mouvement d'indépendance de la Guadeloupe, offrant à la fois divertissement et éducation." />
				<InfoCard variant="default" IconComponent={Shield} title="PROFONDEUR STRATÉGIQUE" description="Construisez de puissantes combinaisons avec votre deck, en équilibrant influence sociale, action politique et résistance culturelle." />
				<InfoCard variant="default" IconComponent={Users} title="CONFLIT MULTIJOUEUR" description="Affrontez vos amis en tant que différentes factions avec des capacités et des objectifs uniques dans la lutte pour l'indépendance." />
			</div>
		</div>
	</section>

	)
}