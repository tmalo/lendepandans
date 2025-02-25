import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"

const dictionary = {
	fr: {
		home: "Accueil",
		rules: "Règles",
		cards: "Cartes",
	},
	en: {
		home: "Home",
		rules: "Rules",
		cards: "Cards",
	},
  gp: {
    home: "Akèy",
    rules: "Règlèman",
    cards: "Kat",
  },	
}

export function Navigation({ lang }: { lang: "fr" | "en" | "gp" }) {
  return (
		<nav className="container mx-auto px-4 h-16 flex items-center justify-between">
		<div className="flex gap-6 font-display">
			<Link href={`/${lang}`} className="hover:underline">
				{dictionary[lang].home}
			</Link>
			<Link href={`/${lang}/rules`} className="hover:underline">
				{dictionary[lang].rules}
			</Link>
			<Link href={`/${lang}/cards`} className="hover:underline">
				{dictionary[lang].cards}
			</Link>
		</div>
		<LanguageSwitcher />
	</nav>
	)
}