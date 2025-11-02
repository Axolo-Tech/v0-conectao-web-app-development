import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users } from "lucide-react"

interface Workshop {
  id: string
  title: string
  description: string
  price: number
  participants: number
  maxParticipants: number
  date: string
  creator: string
}

export function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const spotsLeft = workshop.maxParticipants - workshop.participants

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-balance">{workshop.title}</CardTitle>
        <CardDescription>{workshop.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">${workshop.price} MXN</p>
            <p className="text-xs text-muted-foreground">por persona</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm">
              <Users className="h-4 w-4" />
              <span>
                {workshop.participants}/{workshop.maxParticipants}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{spotsLeft} lugares disponibles</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{workshop.date}</span>
        </div>

        <p className="text-xs text-muted-foreground">Organizado por {workshop.creator}</p>

        <div className="bg-secondary text-secondary-foreground text-xs p-2 rounded-md text-center">
          WorkshopPromo via Arbitrum Stylus
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-transparent" variant="outline">
          Seguir taller
        </Button>
      </CardFooter>
    </Card>
  )
}
