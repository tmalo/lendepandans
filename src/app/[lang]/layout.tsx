import type { Metadata } from "next";
import { Merriweather, Montserrat } from "next/font/google"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Footer } from "@/components/footer"

const merriweather = Merriweather({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
	variable: "--font-merriweather",
})

const montserrat = Montserrat({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-montserrat",
})

export const metadata: Metadata = {
	title: "Board Game",
	description: "A strategic board game",
}

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

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ lang: "fr" | "en" }>
}) {
	const lang = (await params).lang
	return (
		<html lang={lang} className={`${merriweather.variable} ${montserrat.variable}`}>
			<body className="font-body min-h-screen flex flex-col">
				<header className="border-b">
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
				</header>
				<main className="container mx-auto px-4 py-8 flex-1">{children}</main>
				<Footer lang={lang} />
			</body>
		</html>
	)
}