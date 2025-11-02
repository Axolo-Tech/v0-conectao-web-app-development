import { LoginForm } from "@/components/login-form"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Image src="/logo.jpg" alt="Conectao Logo" width={120} height={120} className="rounded-full" priority />
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Conectao</h1>
            <p className="text-muted-foreground text-lg">DeFi para todos</p>
          </div>
        </div>

        <LoginForm />

        <div className="text-center text-sm text-muted-foreground">
          <p>Powered by ENS, Scroll & Arbitrum</p>
        </div>
      </div>
    </main>
  )
}
