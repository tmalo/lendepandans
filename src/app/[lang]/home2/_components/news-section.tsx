import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ChevronRight } from "lucide-react"

interface NewsEvent {
	id: string
  img: string
  alt: string
  date: string
  title: string
  description: string
  link: string
}

export default async function NewsSection() {
	let data: NewsEvent[] = await fetch(process.env.API_SERVER_ENDPOINT + '/news').then(res => res.json());
	return (
		<div className="container mx-auto px-4">
			<h2 className="text-3xl font-bold mb-8 font-heading">
				DERNIÈRES ACTUALITÉS & ÉVÉNEMENTS
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{data.map((news) => (
					<Card key={news.id} className="bg-[#111] border-[#333] text-white">
						<img src={news.img} alt={news.alt} className="w-full h-48 object-cover" />
						<CardContent className="pt-4">
							<div className="flex items-center text-xs text-gray-400 mb-2 font-body">
								<Calendar className="h-3 w-3 mr-1" /> {news.date}
							</div>
							<h3 className="text-lg font-bold mb-2 font-heading">{news.title}</h3>
							<p className="text-sm text-gray-400 mb-4 font-body">{news.description}</p>
							<Link href={news.link} className="text-yellow-500 text-sm flex items-center font-heading">
								LIRE PLUS <ChevronRight className="ml-1 h-4 w-4" />
							</Link>
						</CardContent>
					</Card>
				))}
			</div>
			<div className="text-center mt-8">
				<Button
					variant="outline"
					className="border-yellow-500 bg-black text-yellow-500 hover:bg-yellow-500 hover:text-black font-heading"
				>
					VOIR TOUTES LES ACTUALITÉS
				</Button>
			</div>
		</div>
	);
}

