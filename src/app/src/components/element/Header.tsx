import Image from 'next/image'
import { Content } from "types/Content"

type Props = {
  content: Content
}

export default function Header() {
  return (
    <header>
      <h1>MiyuLab Blog</h1>
    </header>
  )
}
