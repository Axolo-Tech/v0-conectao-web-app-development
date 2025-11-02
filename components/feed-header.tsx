"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Plus } from "lucide-react"
import Image from "next/image"

export function FeedHeader() {
  const router = useRouter()
  const [user, setUser] = useState<{ email: string; ensName: string } | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem("conectao_user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/")
    }
  }, [router])

  if (!user) return null

  const initials = user.ensName.split(".")[0].substring(0, 2).toUpperCase()

  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-4">
          <Image src="/logo.jpg" alt="Conectao" width={40} height={40} className="rounded-full" />
          <div>
            <p className="font-semibold">{user.ensName}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={() => router.push("/create")} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Crear
          </Button>
          <Avatar>
            <AvatarFallback className="bg-accent text-accent-foreground">{initials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
