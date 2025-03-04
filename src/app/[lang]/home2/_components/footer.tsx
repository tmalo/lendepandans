import Link from "next/link"

export default function Footer() {
	return (
		<footer className="bg-black py-12 border-t border-[#333]">
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<h3 className="text-xl font-bold text-yellow-500 mb-4 font-heading">LENDÉPANDANS</h3>
					<p className="text-sm text-gray-400 font-body">
						Un jeu stratégique de construction de deck sur la résistance historique et la lutte pour l'indépendance
						de la Guadeloupe.
					</p>
				</div>
				<div>
					<h4 className="font-bold mb-4 font-heading">JEU</h4>
					<ul className="space-y-2 text-sm text-gray-400">
						<li>
							<Link href="#" className="hover:text-white font-body">
								Comment jouer
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white font-body">
								Galerie de cartes
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white font-body">
								Extensions
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white font-body">
								FAQ
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="font-bold mb-4 font-heading">COMMUNAUTÉ</h4>
					<ul className="space-y-2 text-sm text-gray-400">
						<li>
							<Link href="#" className="hover:text-white font-body">
								Forums
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white font-body">
								Événements
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white font-body">
								Règles de tournoi
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white font-body">
								Créateurs de contenu
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="font-bold mb-4 font-heading">SUPPORT</h4>
					<ul className="space-y-2 text-sm text-gray-400">
						<li>
							<Link href="#" className="hover:text-white font-body">
								Contactez-nous
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white font-body">
								Localisateur de magasins
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white font-body">
								Politique d'expédition
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white font-body">
								Kit de presse
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-12 pt-6 border-t border-[#333] flex flex-col md:flex-row justify-between items-center">
				<p className="text-xs text-gray-500 font-body">© 2025 Lendépandans. Tous droits réservés.</p>
				<div className="flex gap-4 mt-4 md:mt-0">
					<Link href="#" className="text-gray-400 hover:text-white font-body">
						Conditions
					</Link>
					<Link href="#" className="text-gray-400 hover:text-white font-body">
						Confidentialité
					</Link>
					<Link href="#" className="text-gray-400 hover:text-white font-body">
						Cookies
					</Link>
				</div>
			</div>
		</div>
	</footer>

	)
}