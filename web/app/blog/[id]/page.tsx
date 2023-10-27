import { serverClient } from "@/lib/trpc-server-client"

export default async function BlogPostPage({
  params,
}: {
  params: { id: number }
}) {
  const post = await serverClient.post.getById({ id: params.id })
  return <></>
}
