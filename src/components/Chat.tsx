'use client'
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
import { useChat } from 'ai/react'
import { ScrollArea } from '@/components/ui/scroll-area'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'api/chat',
  })

  return (
    <Card className="w-4/12">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        {messages.length === 0 && (
          <CardDescription>
            Welcome to Chat AI! This interactive chat allows you to communicate
            with an AI assistant. Ask questions, seek guidance, or explore
            various topics. The AI assistant is here to assist you and provide
            helpful responses. Start the conversation by typing your query in
            the input field below and click &quot;Send&quot; to get a response.
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <ScrollArea className="mr-4 h-[600px] w-full pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="mb-4 flex gap-3 text-sm text-slate-600"
              >
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>KC</AvatarFallback>
                    <AvatarImage src="https://github.com/klevercorrea.png" />
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>KC</AvatarFallback>
                    <AvatarImage src="https://github.com/openai.png" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'Usuário' : 'AI'}:
                  </span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
