import Image from "next/image"
import Link from "next/link"
import { MoreHorizontal, Heart, Send, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface PinProps {
  pin: {
    id: number
    title: string
    image: string
    width: number
    height: number
    user: {
      name: string
      avatar: string
    }
  }
}

export function PinCard({ pin }: PinProps) {
  return (
    <div className="break-inside-avoid mb-4">
      <div className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
        <div className="relative group">
          <Link href={`/pin/${pin.id}`}>
            <Image
              src={pin.image || "/placeholder.svg"}
              alt={pin.title}
              width={pin.width}
              height={pin.height}
              className="w-full object-cover"
            />
          </Link>

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200" />

          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white shadow-sm">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>

          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white shadow-sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Heart className="mr-2 h-4 w-4" />
                  Save
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Send className="mr-2 h-4 w-4" />
                  Send
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Report Pin</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="p-3">
          <h3 className="font-medium text-sm line-clamp-2">{pin.title}</h3>

          <div className="flex items-center mt-2">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={pin.user.avatar} alt={pin.user.name} />
              <AvatarFallback>{pin.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs">{pin.user.name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

