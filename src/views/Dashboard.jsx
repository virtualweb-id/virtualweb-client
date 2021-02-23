import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { Sidebar, SidebarMobile } from "../components"
import { DashboardNavbar } from "../components"
import RouterView from "../routes/RouterView"
import { fetchGuest } from "../store/action/guest"
import { fetchInvitation } from "../store/action/invitation"
import { fetchWedding } from "../store/action/wedding"

export default ({ routes }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { wedding } = useSelector(state => state.wedding)

  useEffect(() => {
    if(!localStorage.access_token) history.push('/')
    else {
      dispatch(fetchGuest())
      dispatch(fetchInvitation())
      dispatch(fetchWedding(history))
    }
  }, [])

  const [mobile, setMobile] = useState(false)
  
  useEffect(() => {
    const setLarge = () => {
      if (window.innerWidth < 1100) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }

    window.addEventListener('resize', setLarge)

    return () => {
      window.removeEventListener('resize', setLarge)
    }
  }, [mobile])

  return (
    <>
    <div className="flex w-screen flex-row h-screen overflow-hidden">
      {/* <div className="w-full h-full overflow-hidden"> */}
      <div className="h-screen flex flex-col md:w-1/6 lg:w-1/6 w-1/12 bg-gray-200">
        { mobile ? 
        <SidebarMobile /> : 
        <Sidebar /> }
      </div>
      <div className="h-screen flex flex-col w-11/12">
        <DashboardNavbar />
        <div className="w-full h-screen flex flex-row overflow-hidden">
          <RouterView routes={routes} />
        </div>
      </div>
      {/* </div> */}
    </div>
    </>
  )
}