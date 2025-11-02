import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock } from "lucide-react"

interface Campaign {
  id: string
  title: string
  description: string
  price: number
  current: number
  goal: number
  creator: string
  daysLeft: number
}

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const progress = (campaign.current / campaign.goal) * 100
  const isComplete = campaign.current >= campaign.goal

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-balance">{campaign.title}</CardTitle>
        <CardDescription>{campaign.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progreso</span>
            <span className="font-semibold">
              {campaign.current} / {campaign.goal} unidades
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">${campaign.price} MXN</p>
            <p className="text-xs text-muted-foreground">por unidad</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{campaign.daysLeft} días</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">Creado por {campaign.creator}</p>

        {isComplete && (
          <div className="bg-accent/10 text-accent text-sm p-2 rounded-md text-center">
            Escrow liberado en Scroll testnet
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={isComplete}>
          {isComplete ? "Campaña completada" : "Unirme"}
        </Button>
      </CardFooter>
    </Card>
  )
}
