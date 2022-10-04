import Image, { ImageProps } from 'next/future/image'
import React from 'react'

type Props = Omit<ImageProps, 'src' | 'width' | 'height'> & {
  src: string
  width?: number
  height?: number
}

export default function MicroCMSImage({ className, src, alt, ...imageProps }: Props) {
  return (
    <Image
      {...imageProps}
      className={className}
      src={src}
      placeholder="blur"
      blurDataURL={`${src}?auto=compress&w=10`}
      alt={alt}
    />
  )
}
