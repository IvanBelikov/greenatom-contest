import galleryStore from './galleryStore'
import imageViewerStore from './imageViewerStore'

class RootStore {
  gallery = galleryStore
  imageViewer = imageViewerStore
}

export default RootStore
