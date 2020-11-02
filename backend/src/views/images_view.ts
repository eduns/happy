import Image from '../models/Image'

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `https://3333-e173676f-942e-4a56-8fbd-e41d524ad232.ws-us02.gitpod.io/uploads/${image.path}`
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}