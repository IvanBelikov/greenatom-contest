import { useStores } from '@/rootStoreContext'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import GalleryItem from './GalleryItem'
import Spin from '@/components/UI/Spin'

export default observer(function Gallery() {
  const { gallery } = useStores()

  useEffect(() => {
    gallery.getGalleryAction()
  }, [])

  if (gallery.isLoading) {
    return (
      <div className="mt-10">
        <Spin />
      </div>
    )
  }

  return (
    <div className="container mx-auto grid grid-flow-dense auto-rows-max grid-cols-gallery gap-5 pt-10">
      {gallery.images.map((image) => {
        return <GalleryItem key={image.id} image={image} />
      })}
    </div>
  )
})
