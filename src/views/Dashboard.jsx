import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { Sidebar } from "../components"
import { DashboardNavbar } from "../components"
import RouterView from "../routes/RouterView"
import { fetchGuest } from "../store/action/guest"

export default ({ routes }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if(!localStorage.access_token) history.push('/')
    else {
      dispatch(fetchGuest())
    }
  }, [])

  return (
    <div className="flex w-full flex-row h-screen">
      <div className="h-full flex flex-col w-1/6 bg-gray-200">
      <Sidebar />
      </div>
      <div className="h-full flex flex-col w-full">
        <DashboardNavbar />
        <div className="w-full h-full flex flex-row "
        style={{overflowY: 'auto'}}>
          <RouterView routes={routes} />
        </div>
      </div>
    </div>
  )
}