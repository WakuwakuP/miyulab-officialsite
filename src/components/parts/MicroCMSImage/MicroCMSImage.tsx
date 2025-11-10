import Image, { type ImageProps } from 'next/image'

type MicroCMSImageProps = Omit<ImageProps, 'src' | 'width' | 'height'> & {
  src: string
  width?: number
  height?: number
}

export const MicroCMSImage = ({
  className,
  src,
  alt,
  ...imageProps
}: MicroCMSImageProps) => (
  <Image
    {...imageProps}
    alt={alt}
    blurDataURL={`${src}?auto=compress&w=10`}
    className={className}
    placeholder="blur"
    src={src}
  />
)
