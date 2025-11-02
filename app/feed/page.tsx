import { FeedHeader } from "@/components/feed-header"
import { CampaignCard } from "@/components/campaign-card"
import { WorkshopCard } from "@/components/workshop-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Demo data
const campaigns = [
  {
    id: "1",
    title: "Café Orgánico Chiapas",
    description: "Café de altura cultivado por productores locales",
    price: 150,
    current: 32,
    goal: 50,
    creator: "cafechiapas.conectao.eth",
    daysLeft: 12,
  },
  {
    id: "2",
    title: "Playeras ENS",
    description: "Playeras oficiales con diseños exclusivos de ENS",
    price: 350,
    current: 18,
    goal: 30,
    creator: "ensmerch.conectao.eth",
    daysLeft: 8,
  },
]

const workshops = [
  {
    id: "1",
    title: "Barismo básico con @cafechiapas.eth",
    description: "Aprende técnicas profesionales de preparación de café",
    price: 500,
    participants: 12,
    maxParticipants: 20,
    date: "15 Nov 2025",
    creator: "cafechiapas.conectao.eth",
  },
  {
    id: "2",
    title: "Diseña tu dominio ENS",
    description: "Workshop sobre identidad digital y Web3",
    price: 300,
    participants: 8,
    maxParticipants: 15,
    date: "20 Nov 2025",
    creator: "ensmexico.conectao.eth",
  },
]

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-background">
      <FeedHeader />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Tabs defaultValue="discover" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="discover">Descubrir</TabsTrigger>
            <TabsTrigger value="my-campaigns">Mis campañas</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Campañas trending</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {campaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Talleres activos</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {workshops.map((workshop) => (
                  <WorkshopCard key={workshop.id} workshop={workshop} />
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="my-campaigns">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aún no has creado ninguna campaña</p>
            </div>
          </TabsContent>

          <TabsContent value="social">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Conecta con otros usuarios para ver su actividad</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
