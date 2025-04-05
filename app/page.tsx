import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PinterestLogo } from "@/components/pinterest-logo"
import { Carousel } from "@/components/carousel"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <PinterestLogo className="h-8 w-8" />
          <span className="text-red-600 font-bold text-xl">Pinterest</span>
          <Link href="/explore" className="font-semibold ml-4 hover:underline">
            Explore
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/about" className="font-medium hover:underline">
            About
          </Link>
          <Link href="/business" className="font-medium hover:underline">
            Business
          </Link>
          <Link href="/blog" className="font-medium hover:underline">
            Blog
          </Link>
          <Link href="/login">
            <Button variant="default" className="bg-red-600 hover:bg-red-700">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline" className="border-gray-300">
              Sign up
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Get your next</h1>
        <Carousel
          items={["chai time snacks idea", "home decor inspiration", "DIY project idea", "outfit inspiration"]}
          className="text-4xl md:text-5xl font-bold text-amber-600 mb-12"
        />

        {/* Image Grid Preview */}
        <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-5 gap-2 mt-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`${i === 0 ? "col-span-1 row-span-2" : ""} overflow-hidden rounded-2xl`}>
              <Image
                src={`/placeholder.svg?height=${300 + i * 50}&width=300`}
                alt="Inspiration image"
                width={300}
                height={300 + i * 50}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="fixed bottom-4 left-0 right-0 flex justify-center">
          <div className="bg-yellow-100 px-6 py-3 rounded-full flex items-center">
            <span>Here's how it works</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}

