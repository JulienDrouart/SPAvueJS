export const callApi = async ({ id, page }) => {
  try {
    let url = 'none'
    if (id) {
      url = `https://jsonplaceholder.typicode.com/posts/${id}`
    } else {
      const limit = 6
      const start = (page - 1) * limit
      url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
    }

    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Network response was not ok')
    }
    const returnData = await res.json()
    return returnData
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error)
  }
}
