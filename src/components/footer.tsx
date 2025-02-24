const dictionary = {
  fr: {
    copyright: "Tous droits réservés.",
    madeWith: "Fait avec",
    by: "par",
  },
  en: {
    copyright: "All rights reserved.",
    madeWith: "Made with",
    by: "by",
  },
  gp: {
    copyright: "Tout dwa rézèvé.",
    madeWith: "Fèt èvè",
    by: "pa",
  },	
}

export function Footer({ lang }: { lang: "fr" | "en" }) {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col gap-2 md:h-16 items-center justify-center md:flex-row md:justify-between text-sm">
        <p className="font-body text-muted-foreground">
          &copy; {new Date().getFullYear()} Board Game. {dictionary[lang].copyright}
        </p>
        <p className="font-body text-muted-foreground">
          {dictionary[lang].madeWith} ♥️ {dictionary[lang].by} Company Name
        </p>
      </div>
    </footer>
  )
}

