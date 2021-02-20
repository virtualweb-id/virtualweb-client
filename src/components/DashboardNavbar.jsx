import { useHistory } from "react-router-dom"

export default () => {
  const history = useHistory()

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <nav className="flex w-full justify-between bg-gray-400 p-2">
      <div>Nobita & Sizuka</div>
      <div className="cursor-pointer" onClick={handleLogout}>Logout</div>
    </nav>
  )
}