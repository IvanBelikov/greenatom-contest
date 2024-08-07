import { makeAutoObservable } from 'mobx'

class ImageViewerStore {
  viewImage = ''
  isVisible = false

  constructor() {
    makeAutoObservable(this)
  }

  set image(image) {
    this.viewImage = image
  }

  set visible(value) {
    this.isVisible = value
  }
}

export default new ImageViewerStore()
