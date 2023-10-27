"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import MDEditor from "@uiw/react-md-editor"
import { trpc } from "@/lib/trpc"
import { useRouter } from "next/navigation"

const newBlogPostSchema = z.object({
  title: z.string().max(255),
  content: z.string(),
})

export default function NewBlogPostForm() {
  const router = useRouter()

  const { mutate: createPost } = trpc.post.create.useMutation({
    onSuccess: (data) => router.push(`/blog/${data.id}`),
  })
  // 1. Define your form.
  const form = useForm<z.infer<typeof newBlogPostSchema>>({
    resolver: zodResolver(newBlogPostSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof newBlogPostSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    createPost({
      title: values.title,
      content: values.content,
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 flex flex-col space-y-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  className="h-fit border-0 focus:outline-0 focus:border-0 text-4xl font-black tracking-tighter p-0 m-0"
                  placeholder="My blog title"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {
                  "Give your masterpiece a name! What's the catchy title popping into your mind?"
                }
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl className="flex-1 flex flex-col">
                <div>
                  <MDEditor {...field} />
                </div>
              </FormControl>
              <FormDescription>
                Let the thoughts flow! Your content canvas awaits its
                masterpiece.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
