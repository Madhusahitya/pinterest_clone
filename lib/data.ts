// Mock data generator for pins
export function generatePins(count: number) {
  const categories = [
    "Food",
    "Travel",
    "Fashion",
    "Home Decor",
    "DIY",
    "Art",
    "Technology",
    "Fitness",
    "Beauty",
    "Quotes",
  ]

  const users = [
    { name: "John Doe", avatar: "/placeholder.svg?height=50&width=50" },
    { name: "Jane Smith", avatar: "/placeholder.svg?height=50&width=50" },
    { name: "Alex Johnson", avatar: "/placeholder.svg?height=50&width=50" },
    { name: "Sam Wilson", avatar: "/placeholder.svg?height=50&width=50" },
    { name: "Taylor Swift", avatar: "/placeholder.svg?height=50&width=50" },
  ]

  const titles = [
    "Amazing inspiration for your next project",
    "You won't believe what I found",
    "This changed my life completely",
    "Try this at home today",
    "The perfect idea for your home",
    "Stunning design concepts",
    "Creative solutions for everyday problems",
    "Brilliant hacks you need to know",
    "Incredible transformation ideas",
    "Must-try recipes for the weekend",
  ]

  return Array.from({ length: count }, (_, i) => {
    const height = 200 + Math.floor(Math.random() * 300)
    const width = 300
    const category = categories[Math.floor(Math.random() * categories.length)]
    const user = users[Math.floor(Math.random() * users.length)]
    const title = titles[Math.floor(Math.random() * titles.length)]

    return {
      id: i + 1,
      title: title,
      image: `/placeholder.svg?height=${height}&width=${width}`,
      width,
      height,
      category,
      user,
      likes: Math.floor(Math.random() * 1000),
      comments: Math.floor(Math.random() * 50),
    }
  })
}

