import server from '@/config/api'
import { getGalleryEndpoint } from '@/config/api/endpoints'

export default async function getGallery(offset, limit) {
  const endpoint = getGalleryEndpoint()
  const response = server.get(endpoint, {
    params: {
      offset,
      limit,
    },
  })

  return response
}
