const url = process.env.REACT_APP_BASE_URL
const token = process.env.REACT_APP_TOKEN

// Fetch data from the API without cors
export const fetchData = async (endpoint, method = 'GET', body = null) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Authorization', `Bearer ${token}`)

  const request = new Request(`${url}/${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  })
  try {
    const response = await fetch(request)
    const data = await response.json()
    return data

  } catch (error) {
    console.log(error)
  }
}

