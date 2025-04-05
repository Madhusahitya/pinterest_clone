"use client"

import { useState, useEffect } from "react"

interface CarouselProps {
  items: string[]
  className?: string
}

export function Carousel({ items, className = "" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <div className={`relative h-16 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {item}
        </div>
      ))}
      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-amber-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

