import { Button } from "@/components/ui/button"
import Link from "next/link"

const dictionary = {
  fr: {
    title: "Bienvenue dans notre jeu de société",
    description: "Un jeu de stratégie passionnant où vous devrez construire votre influence et gérer vos ressources.",
    cta: "Découvrir les règles",
  },
  en: {
    title: "Welcome to our board game",
    description: "An exciting strategy game where you'll build influence and manage resources.",
    cta: "Discover the rules",
  },
  gp: {
    title: "Byenvini an jé-la",
    description: "On jé istratéji éspésyal otila ou ké ni pou konstwi lenfliyans a-w é jéré resous a-w.",
    cta: "Dékouvè règlèman-la",
  },
}

export default async function Home({
	params
}: {
	params: Promise<{ lang: "fr" | "en" }>
}) {
	const lang = (await params).lang

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
      <h1 className="text-4xl font-bold tracking-tighter mb-4 font-display">{dictionary[lang].title}</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-[600px] font-body">{dictionary[lang].description}</p>
      <Button asChild className="font-display">
        <Link href={`/${lang}/rules`}>{dictionary[lang].cta}</Link>
      </Button>
    </div>
  )
}

