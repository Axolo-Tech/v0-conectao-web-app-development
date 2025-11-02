"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FeedHeader } from "@/components/feed-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreatePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [type, setType] = useState<"campaign" | "workshop">("campaign")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    // Simulate creating in Firestore
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const user = JSON.parse(localStorage.getItem("conectao_user") || "{}")

    alert(`${type === "campaign" ? "Campaña" : "Taller"} creada por ${user.ensName}`)

    router.push("/feed")
  }

  return (
    <div className="min-h-screen bg-background">
      <FeedHeader />

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Crear nueva campaña o taller</CardTitle>
            <CardDescription>Comparte tu producto o conocimiento con la comunidad</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="campaign" onValueChange={(v) => setType(v as "campaign" | "workshop")}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="campaign">Campaña</TabsTrigger>
                <TabsTrigger value="workshop">Taller</TabsTrigger>
              </TabsList>

              <TabsContent value="campaign">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre del producto</Label>
                    <Input id="name" name="name" placeholder="Ej: Café Orgánico Chiapas" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Describe tu producto..."
                      rows={3}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Precio unitario (MXN)</Label>
                      <Input id="price" name="price" type="number" placeholder="150" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goal">Mínimo requerido</Label>
                      <Input id="goal" name="goal" type="number" placeholder="50" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Duración (días)</Label>
                    <Input id="duration" name="duration" type="number" placeholder="30" required />
                  </div>

                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Pago gestionado por Scroll</p>
                    <p className="text-xs text-muted-foreground">
                      Los fondos se mantendrán en escrow hasta alcanzar el mínimo requerido
                    </p>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Publicando..." : "Publicar campaña"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="workshop">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="workshop-name">Nombre del taller</Label>
                    <Input id="workshop-name" name="name" placeholder="Ej: Barismo básico" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="workshop-description">Descripción</Label>
                    <Textarea
                      id="workshop-description"
                      name="description"
                      placeholder="Describe tu taller..."
                      rows={3}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="workshop-price">Precio (MXN)</Label>
                      <Input id="workshop-price" name="price" type="number" placeholder="500" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="max-participants">Máx. participantes</Label>
                      <Input id="max-participants" name="maxParticipants" type="number" placeholder="20" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Fecha del taller</Label>
                    <Input id="date" name="date" type="date" required />
                  </div>

                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">WorkshopPromo via Arbitrum Stylus</p>
                    <p className="text-xs text-muted-foreground">
                      Sistema experimental de promoción de talleres en Arbitrum
                    </p>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Publicando..." : "Publicar taller"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
