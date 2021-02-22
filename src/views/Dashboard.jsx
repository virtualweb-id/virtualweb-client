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
      if (window.innerWidth < 768 ) {
        setMobile(true)
      }
    }

    window.addEventListener('resize', setLarge)

    return () => {
      window.removeEventListener('resize', setLarge)
    }
  }, [mobile])

  /*
  useEffect(() => {
    const hidedropdown = () => {
      if (window.innerWidth > 768 && dropdown) {
        setDropdown(false)
      }
    }

    window.addEventListener('resize', hidedropdown)

    return () => {
      window.removeEventListener('resize', hidedropdown)
    }
  }, [dropdown])
  */
  

  return (
    <div className="flex w-full flex-row h-screen">
      <div className="h-full flex flex-col w-1/6 bg-gray-200">
        { mobile ? 
      <SidebarMobile /> : 
      <Sidebar /> }
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