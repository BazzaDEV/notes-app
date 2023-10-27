"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export default function NewPostButton() {
  const router = useRouter()
  return <Button onClick={() => router.push("/blog/new")}>New +</Button>
}
