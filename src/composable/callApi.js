export const callApi = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    if (!res.ok) {
      throw new Error('Network response was not ok')
    }
    return await res.json()
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error)
  }
}
