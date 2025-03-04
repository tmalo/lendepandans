import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Download } from "lucide-react"
import Header from "./_components/header"
import Footer from "./_components/footer"
import NewsSection from "./_components/news-section"
import GameFeaturesSection from "./_components/game-features-section"
import CommunitySection from "./_components/community-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
        <div
          className="h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: "url('https://placehold.co/1600x800')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 -mt-60">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-500 font-heading">
              FORGEZ LE CHEMIN VERS LA LIBERTÉ
            </h1>
            <p className="text-xl mb-8 font-body">
              Construisez votre mouvement, défiez le pouvoir colonial et menez la Guadeloupe vers l'indépendance dans ce
              jeu stratégique de construction de deck inspiré d'événements historiques réels.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600 font-heading">COMMENCER</Button>
              <Button variant="outline" className="border-white font-heading bg-black">
                VOIR LA BANDE-ANNONCE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-16 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-2 font-heading">DERNIÈRE EXTENSION</h2>
              <h3 className="text-4xl font-bold text-yellow-500 mb-6 font-heading">VOIX DE LA RÉSISTANCE</h3>
              <p className="mb-6 font-body">
                Explorez les moments décisifs de la Guadeloupe des années 1950, lorsque de nouveaux leaders émergent et
                que le mouvement pour l'autonomie prend de l'ampleur. Cette extension introduit 120 nouvelles cartes
                mettant en vedette des personnages historiques influents et de puissantes nouvelles mécaniques de jeu.
              </p>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600 font-heading">
                DÉCOUVRIR MAINTENANT <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://placehold.co/600x400"
                  alt="Boîte de l'extension Voix de la Résistance"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black px-4 py-2 rounded font-bold font-heading">
                  NOUVEAU
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <GameFeaturesSection />

      {/* How to Play */}
      <section className="py-16 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-heading">COMMENT JOUER</h2>
              <Tabs defaultValue="basics" className="w-full">
                <TabsList className="bg-[#111] border border-[#333]">
                  <TabsTrigger value="basics" className="font-heading">
                    Bases
                  </TabsTrigger>
                  <TabsTrigger value="cards" className="font-heading">
                    Cartes
                  </TabsTrigger>
                  <TabsTrigger value="strategy" className="font-heading">
                    Stratégie
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="basics" className="mt-4">
                  <p className="mb-4 font-body">
                    Lendépandans se joue sur plusieurs tours, représentant la lutte pour l'indépendance qui a duré des
                    décennies. Chaque joueur construit un mouvement grâce à des cartes représentant des personnages
                    historiques, des événements et des tactiques.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                    <li className="font-body">Construisez votre deck de départ à partir des factions disponibles</li>
                    <li className="font-body">
                      Piochez des cartes et jouez-les pour gagner de l'influence et des ressources
                    </li>
                    <li className="font-body">Recrutez de nouvelles cartes pour renforcer votre mouvement</li>
                    <li className="font-body">Contrez les actions coloniales et les mouvements des autres joueurs</li>
                    <li className="font-body">Obtenez l'indépendance en atteignant le seuil d'influence requis</li>
                  </ol>
                  <Button className="mt-6 font-heading">
                    RÈGLES COMPLÈTES <Download className="ml-2 h-4 w-4" />
                  </Button>
                </TabsContent>
                <TabsContent value="cards" className="mt-4">
                  <p className="mb-4 font-body">
                    Les cartes dans Lendépandans représentent les outils de résistance et de changement. Chaque carte
                    appartient à l'une des cinq catégories :
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li className="font-body">
                      <span className="text-blue-400 font-bold">Leaders</span> - Fournissent des effets puissants et
                      continus
                    </li>
                    <li className="font-body">
                      <span className="text-green-400 font-bold">Actions</span> - Effets ponctuels qui font avancer
                      votre cause
                    </li>
                    <li className="font-body">
                      <span className="text-red-400 font-bold">Lieux</span> - Établissent des bases d'opération avec des
                      avantages persistants
                    </li>
                    <li className="font-body">
                      <span className="text-purple-400 font-bold">Alliés</span> - Personnages de soutien qui renforcent
                      vos capacités
                    </li>
                    <li className="font-body">
                      <span className="text-yellow-400 font-bold">Événements</span> - Représentent des moments
                      historiques avec des effets bouleversants
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="strategy" className="mt-4">
                  <p className="mb-4 font-body">
                    Le succès dans Lendépandans nécessite d'équilibrer plusieurs approches :
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li className="font-body">
                      <span className="font-bold">Résistance culturelle</span> - Préserver l'identité et construire le
                      soutien communautaire
                    </li>
                    <li className="font-body">
                      <span className="font-bold">Manœuvres politiques</span> - Naviguer dans des relations complexes
                      avec les puissances coloniales
                    </li>
                    <li className="font-body">
                      <span className="font-bold">Développement économique</span> - Construire l'autosuffisance et des
                      réseaux de ressources
                    </li>
                    <li className="font-body">
                      <span className="font-bold">Solidarité internationale</span> - Obtenir le soutien d'alliés et
                      d'organisations mondiales
                    </li>
                  </ul>
                  <p className="mt-4 font-body">
                    Différentes factions excellent dans différentes stratégies, alors choisissez votre voie avec sagesse
                    !
                  </p>
                </TabsContent>
              </Tabs>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://placehold.co/700x400"
                  alt="Démonstration de gameplay"
                  className="w-full h-full object-cover"
                />
                <div className="relative -mt-16 bg-black/70 p-4">
                  <p className="font-bold font-heading">Tutoriel : Construire votre premier mouvement de résistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 bg-[#0a0a0a]">
        <NewsSection />
      </section>

      {/* Community */}
      <CommunitySection />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">COMMENCEZ VOTRE VOYAGE VERS L'INDÉPENDANCE</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Découvrez la profondeur stratégique et la richesse historique de la lutte de la Guadeloupe pour la liberté.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-black text-white hover:bg-gray-800 font-heading">ACHETER LE KIT DE DÉMARRAGE</Button>
            <Button variant="outline" className="border-black hover:bg-black/10 font-heading">
              TROUVER UN MAGASIN
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

