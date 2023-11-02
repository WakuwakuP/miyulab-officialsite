import type { ImageProps } from 'next/image'
import Image from 'next/image'

type MicroCMSImageProps = Omit<ImageProps, 'src' | 'width' | 'height'> & {
  src: string
  width?: number
  height?: number
}

export const MicroCMSImage = ({ className, src, alt, ...imageProps }: MicroCMSImageProps) => {
  return (
    <Image
      {...imageProps}
      className={className}
      src={src}
      placeholder='blur'
      blurDataURL={`${src}?auto=compress&w=10`}
      alt={alt}
    />
  )
}
