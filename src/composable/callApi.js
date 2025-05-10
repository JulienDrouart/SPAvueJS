export const callApi = async (id) => {
  try {
    let url = 'none'
    if (id) {
      url = `https://jsonplaceholder.typicode.com/posts/${id}`
    } else {
      url = 'https://jsonplaceholder.typicode.com/posts?_limit=6'
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
