import Image from 'next/image'
import { Content } from "types/Content"

type Props = {
  content: Content
}

export default function ContentCard({content}: Props) {
  console.log(content)
  return (
    <>
      <section className="card">
        <h3>{content.title}</h3>
        {/* <Image src={content.thumbnail}/> */}
      </section>
    </>
  )
}
