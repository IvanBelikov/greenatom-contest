import { assetsUrl } from '@/config'

import useScrollBlock from '@/hooks/useScrollBlock'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/rootStoreContext'
import { useNavigate, useParams } from 'react-router-dom'

export default observer(function ImageViewer() {
  const [blockScroll, allowScroll] = useScrollBlock()
  const navigate = useNavigate()
  const { imageViewer } = useStores()
  const { image } = useParams()

  function handleClose() {
    allowScroll()

    imageViewer.image = ''
    imageViewer.visible = false
  }

  useEffect(() => {
    if (image) {
      imageViewer.image = image
      imageViewer.visible = true
    }
  }, [image])

  useEffect(() => {
    if (imageViewer.isVisible) {
      blockScroll()
    } else {
      allowScroll()
      navigate('/')
    }
  }, [imageViewer.isVisible])

  if (imageViewer.isVisible) {
    return (
      <div
        onClick={handleClose}
        className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full cursor-pointer items-center justify-center overflow-clip bg-[rgba(0,0,0,0.5)]"
      >
        <img
          className="max-h-[900px] min-h-[300px] min-w-[400px] max-w-[800px] cursor-default rounded-sm"
          onClick={(event) => event.stopPropagation()}
          src={assetsUrl + imageViewer.viewImage}
          alt="img"
        />
      </div>
    )
  }
})
