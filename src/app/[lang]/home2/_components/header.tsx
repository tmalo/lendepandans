import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Search } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"


export default function Header() {
	return (
		<header className="border-b border-[#333] bg-black">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center gap-6">
						<Link href="/" className="flex items-center">
							<span className="text-xl font-bold text-yellow-500">LENDÉPANDANS</span>
						</Link>
						<nav className="hidden md:flex">
							<ul className="flex space-x-6">
								<li>
									<Link href="#" className="text-sm font-medium hover:text-yellow-500 font-heading">
										RÈGLES DU JEU
									</Link>
								</li>
								<li>
									<Link href="#" className="text-sm font-medium hover:text-yellow-500 font-heading">
										HISTOIRE
									</Link>
								</li>
								<li>
									<Link href="#" className="text-sm font-medium hover:text-yellow-500 font-heading">
										CARTES
									</Link>
								</li>
								<li>
									<Link href="#" className="text-sm font-medium hover:text-yellow-500 font-heading">
										ÉVÉNEMENTS
									</Link>
								</li>
								<li>
									<Link href="#" className="text-sm font-medium hover:text-yellow-500 font-heading">
										COMMUNAUTÉ
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="flex items-center gap-4">
						<Button variant="ghost" size="icon" className="text-white">
							<Search className="h-5 w-5" />
						</Button>
						<Button
							variant="outline"
							className="hidden bg-black border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black md:inline-flex font-heading"
						>
							JOUER MAINTENANT
						</Button>
						<Button variant="ghost" size="icon" className="md:hidden">
							<Menu className="h-5 w-5" />
						</Button>
						<LanguageSwitcher />
					</div>
				</div>
			</div>
		</header>

	)
}