import type { Metadata } from "next";
import { Merriweather, Montserrat } from "next/font/google"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation";

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
					<Navigation lang={lang} />
				</header>
				<main className="container mx-auto px-4 py-8 flex-1">{children}</main>
				<Footer lang={lang} />
			</body>
		</html>
	)
}