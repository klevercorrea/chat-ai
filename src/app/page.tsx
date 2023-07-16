import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="h-10/12 grid w-3/12 grid-rows-[min-content_1fr_min-context]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-sm text-slate-600">
            <Avatar>
              <AvatarFallback>KC</AvatarFallback>
              <AvatarImage src="https://github.com/klevercorrea.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Humano:</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi fugit dolorem eligendi id exercitationem, veniam odit
              perspiciatis odio quae maxime explicabo inventore cupiditate? Sed
              voluptates tenetur iste atque temporibus sunt.
            </p>
          </div>

          <div className="flex gap-3 text-sm text-slate-600">
            <Avatar>
              <AvatarFallback>OA</AvatarFallback>
              <AvatarImage src="https://github.com/openai.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">AI:</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi fugit dolorem eligendi id exercitationem, veniam odit
              perspiciatis odio quae maxime explicabo inventore cupiditate? Sed
              voluptates tenetur iste atque temporibus sunt.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button>Send</Button>
        </CardFooter>
      </Card>
    </main>
  )
}
