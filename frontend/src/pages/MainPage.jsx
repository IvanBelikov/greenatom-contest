import Gallery from '@/components/Gallery'
import ImageViewer from '@/components/ImageViewer'

import { observer } from 'mobx-react-lite'
import RootStore from '@/stores/rootStore'

import InfiniteScroll from 'react-infinite-scroll-component'

export default observer(function MainPage() {
  const { gallery } = new RootStore()

  return (
    <div className="my-10 flex flex-col items-center justify-center px-5 py-5">
      <h1 className="text-3xl">Галерея</h1>
      <Gallery />
      <ImageViewer />
      <InfiniteScroll
        dataLength={gallery.images.length}
        next={() => gallery.getMoreGallery()}
        hasMore={gallery.loadMore}
        loader={<h1>Loading...</h1>}
      />
    </div>
  )
})
