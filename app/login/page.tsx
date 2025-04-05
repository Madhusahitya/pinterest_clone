"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PinterestLogo } from "@/components/pinterest-logo"
import { Separator } from "@/components/ui/separator"
import { Facebook, Mail } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate login - in a real app, you would call an API
    setTimeout(() => {
      setLoading(false)
      router.push("/feed")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <PinterestLogo className="h-12 w-12 text-red-600" />
          <h1 className="text-3xl font-bold mt-4">Welcome to Pinterest</h1>
          <p className="text-gray-500 mt-2">Find new ideas to try</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-red-600 hover:underline">
              Forgot your password?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </Button>
        </form>

        <div className="mt-6">
          <Separator className="my-4">
            <span className="px-2 text-gray-500 text-sm">OR</span>
          </Separator>

          <div className="space-y-3">
            <Button variant="outline" className="w-full">
              <Facebook className="mr-2 h-4 w-4" />
              Continue with Facebook
            </Button>
            <Button variant="outline" className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Not on Pinterest yet?{" "}
            <Link href="/signup" className="text-red-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 text-xs text-gray-500">
        <p>By continuing, you agree to Pinterest's Terms of Service and acknowledge Privacy Policy</p>
      </div>
    </div>
  )
}

