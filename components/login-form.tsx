"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LoginForm() {
  const router = useRouter()
  const [isRegistering, setIsRegistering] = useState(false)
  const [ensName, setEnsName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [loginMethod, setLoginMethod] = useState<string>("")

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true)
    setLoginMethod(provider)

    // Simulate OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For demo, generate a username based on provider
    const username = `usuario_${Math.floor(Math.random() * 10000)}`
    setEnsName(username)
    setIsRegistering(true)
    setIsLoading(false)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate ENS registration and Firebase save
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Save to localStorage for demo
    localStorage.setItem(
      "conectao_user",
      JSON.stringify({
        email: "",
        ensName: `${ensName}.conectao.eth`,
      }),
    )

    router.push("/feed")
  }

  if (isRegistering) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Crear tu identidad ENS</CardTitle>
          <CardDescription>Elige tu nombre de dominio .conectao.eth</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ens">Tu dominio ENS</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="ens"
                  value={ensName}
                  onChange={(e) => setEnsName(e.target.value)}
                  placeholder="nombre"
                  required
                />
                <span className="text-sm text-muted-foreground whitespace-nowrap">.conectao.eth</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={() => setIsRegistering(false)} className="flex-1">
                Atrás
              </Button>
              <Button type="submit" disabled={isLoading} className="flex-1">
                {isLoading ? "Creando..." : "Crear cuenta"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
        <CardDescription>Elige cómo quieres ingresar a Conectao</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <Button
            type="button"
            variant="outline"
            className="w-full justify-start gap-3 bg-transparent"
            onClick={() => handleSocialLogin("google")}
            disabled={isLoading}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            {isLoading && loginMethod === "google" ? "Conectando..." : "Continuar con Google"}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full justify-start gap-3 bg-transparent"
            onClick={() => handleSocialLogin("facebook")}
            disabled={isLoading}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            {isLoading && loginMethod === "facebook" ? "Conectando..." : "Continuar con Facebook"}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full justify-start gap-3 bg-transparent"
            onClick={() => handleSocialLogin("twitter")}
            disabled={isLoading}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            {isLoading && loginMethod === "twitter" ? "Conectando..." : "Continuar con X (Twitter)"}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full justify-start gap-3 bg-transparent"
            onClick={() => handleSocialLogin("github")}
            disabled={isLoading}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {isLoading && loginMethod === "github" ? "Conectando..." : "Continuar con GitHub"}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">O continúa con email</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full justify-start gap-3 bg-transparent"
            onClick={() => handleSocialLogin("email")}
            disabled={isLoading}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {isLoading && loginMethod === "email" ? "Conectando..." : "Continuar con Email"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
