import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'
import { useContext } from 'react'

const useImageConfig = () => useContext(ImageConfigContext)

export default useImageConfig
