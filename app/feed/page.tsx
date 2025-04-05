"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Home, Bell, MessageCircle, User, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PinterestLogo } from "@/components/pinterest-logo"
import { PinCard } from "@/components/pin-card"
import { generatePins } from "@/lib/data"

export default function FeedPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [pins, setPins] = useState<any[]>([])

  useEffect(() => {
    // Generate mock pins data
    setPins(generatePins(30))
  }, [])

  const categories = [
    "All",
    "Beauty skin care routine",
    "Diy food recipes",
    "Skin care routine",
    "Fashion",
    "Home decor",
    "Technology",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-16 border-r flex flex-col items-center py-4 z-10">
        <Link href="/feed" className="mb-8">
          <PinterestLogo className="h-8 w-8 text-red-600" />
        </Link>

        <div className="flex flex-col items-center gap-6 flex-1">
          <Link href="/feed" className="p-2 rounded-full bg-black text-white">
            <Home className="h-6 w-6" />
          </Link>
          <Link href="/explore" className="p-2 rounded-full hover:bg-gray-100">
            <Search className="h-6 w-6" />
          </Link>
          <Link href="/notifications" className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              99+
            </span>
          </Link>
          <Link href="/messages" className="p-2 rounded-full hover:bg-gray-100 relative">
            <MessageCircle className="h-6 w-6" />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              1
            </span>
          </Link>
          <Link href="/profile" className="p-2 rounded-full hover:bg-gray-100 mt-auto">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-16">
        {/* Search Header */}
        <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                onClick={() => setSearchQuery("")}
              >
                ×
              </Button>
            )}
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Pins Grid */}
        <div className="p-4">
          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
            {pins.map((pin, index) => (
              <PinCard key={index} pin={pin} />
            ))}
          </div>
        </div>
      </div>

      {/* Create Pin Button */}
      <Button
        className="fixed right-6 bottom-6 rounded-full h-12 w-12 p-0 bg-red-600 hover:bg-red-700 shadow-lg"
        aria-label="Create pin"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  )
}

