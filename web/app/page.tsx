import NewPostButton from "@/components/new-post-button"

export default function Home() {
  return (
    <main className="space-y-8">
      <h1 className="text-6xl font-black tracking-tighter">My Blog</h1>
      <div className="flex flex-row-reverse">
        <NewPostButton />
      </div>
    </main>
  )
}
