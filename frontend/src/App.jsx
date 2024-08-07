import Gallery from '@/components/Gallery'
import ImageViewer from '@/components/ImageViewer'

import { observer } from 'mobx-react-lite'
import { RootStoreContext } from './rootStoreContext'
import RootStore from './stores/rootStore'
import InfiniteScroll from 'react-infinite-scroll-component'

import Spin from '@/components/UI/Spin'

export default observer(function App() {
  const { gallery } = new RootStore()

  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <div className="my-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl">Галерея</h1>
        <Gallery />
        <ImageViewer />
        <InfiniteScroll
          dataLength={gallery.images.length}
          next={() => gallery.getMoreGallery()}
          hasMore={gallery.loadMore}
          loader={<h1>Loading...</h1>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        />
      </div>
    </RootStoreContext.Provider>
  )
})
