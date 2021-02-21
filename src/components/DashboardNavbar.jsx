import { useHistory } from "react-router-dom"

export default () => {
  const history = useHistory()
  const username = 'Amanda Rizqi'

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <nav class="relative w-full max-w-screen-xl flex items-center px-6 h-16 bg-gray-900 shadow-2xl text-gray-50">
      <div class="ml-6 space-x-2 md:flex">
        <p class="h-10 flex items-center px-4 rounded font-medium font-bold" href="#">{username}</p>
      </div>
      <button class="flex items-center h-10 pl-2 pr-2 sm:pr-4 rounded bg-gray-800 ml-auto hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
        <span class="font-medium ml-1 leading-none sm:block" onClick={handleLogout}>Logout</span>
      </button>
	  </nav>
  )
}