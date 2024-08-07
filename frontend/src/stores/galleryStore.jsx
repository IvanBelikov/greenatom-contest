import getGallery from '@/api/getGallery'

import { makeAutoObservable, runInAction } from 'mobx'

class GalleryStore {
  images = []
  isLoading = true
  offset = 0
  limit = 20
  loadMore = true

  constructor() {
    makeAutoObservable(this)
  }

  async getGalleryAction() {
    try {
      this.isLoading = true
      const response = await getGallery(this.offset, this.limit)

      runInAction(() => {
        this.images = response.data.data
        this.isLoading = false
      })
    } catch (e) {
      console.error('galleryStore fetchMoreGallery', e)
      this.isLoading = false
    }
  }

  async getMoreGallery() {
    try {
      this.offset = this.offset + this.limit
      const response = await getGallery(this.offset, this.limit)
      if (response.data.data.length !== 0) {
        runInAction(() => {
          this.images = [...this.images, ...response.data.data]
        })
      } else {
        this.loadMore = false
      }
    } catch (e) {
      console.error('galleryStore fetchMoreGallery', e)
    }
  }
}

export default new GalleryStore()
