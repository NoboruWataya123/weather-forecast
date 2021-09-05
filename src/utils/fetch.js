const url = process.env.REACT_APP_BASE_URL
const token = process.env.REACT_APP_TOKEN

// Fetch data from the API without cors
export const fetchData = async () => {
  const response = await fetch(`${url}&token=${token}`,)
  const data = await response.json()
  return data
}