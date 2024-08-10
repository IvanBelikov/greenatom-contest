import { useState } from 'react'
import { assetsUrl } from '@/config'

import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

export default observer(function GalleryItem({ image }) {
  const [isHideInfo, setIsHideInfo] = useState(true)
  const navigate = useNavigate()

  return (
    <div
      onMouseEnter={() => setIsHideInfo(false)}
      onMouseLeave={() => setIsHideInfo(true)}
      onClick={() => navigate(`/${image.image}`)}
      className={
        'relative block h-full max-h-[800px] w-full max-w-[800px] rounded-sm ' +
        (image.isLarge ? 'col-span-2 row-span-2' : 'col-span-auto')
      }
    >
      <img
        src={assetsUrl + image.image}
        alt={image.title}
        className="block h-full w-full object-cover"
      />
      <div
        className={
          'absolute bottom-0 left-0 right-0 top-0 cursor-pointer bg-black opacity-50 ' +
          (isHideInfo ? 'hidden' : '')
        }
      ></div>
      <div
        className={'absolute bottom-2 left-2 ' + (isHideInfo ? 'hidden' : '')}
      >
        <h3 className="text-2xl text-gray-200">{image.title}</h3>
        <p className="text-gray-300">{image.description}</p>
      </div>
    </div>
  )
})
