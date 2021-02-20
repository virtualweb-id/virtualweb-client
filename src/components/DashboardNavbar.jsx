import { useHistory } from "react-router-dom"

export default () => {
  const history = useHistory()

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
      <nav class="relative w-full max-w-screen-xl flex items-center px-6 h-16 bg-gray-900 rounded shadow-2xl text-gray-50">
		<a href="#">
			<svg class="fill-current w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 37">
				<path d="M54.545 24.8h5.456v10.834H36.269V24.8h6.09V10.834h-9.05v24.8H21.122v-1.895a14.13 14.13 0 01-1.79 1.21c-1.81 1.03-3.988 1.566-6.546 1.566-3.976 0-7.086-1.248-9.365-3.654-2.245-2.37-3.42-5.6-3.42-9.725V0h12.186v21.688c0 1.252.244 2.241.859 2.929.543.605 1.29.875 2.213.875 1.119 0 2.19-.376 3.226-1.095 1.04-.72 1.915-1.667 2.637-2.835V0h33.423v24.8z"/>
			</svg>	
		</a>
		<div class="ml-6 space-x-2 hidden md:flex">
			<a class="h-10 flex items-center px-4 rounded font-medium hover:bg-gray-800" href="#">Link 1</a>
			<a class="h-10 flex items-center px-4 rounded font-medium hover:bg-gray-800" href="#">Link 2</a>
			<a class="h-10 flex items-center px-4 rounded font-medium hover:bg-gray-800" href="#">Link 3</a>
		</div>
		<button class="flex items-center h-10 pl-2 pr-2 sm:pr-4 rounded bg-gray-800 ml-auto hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
			<svg class="h-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
			</svg>
			<span class="font-medium ml-1 leading-none hidden sm:block">New Thing</span>
		</button>
		<a class="ml-8" href="#">
			<img class="h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1061833282315145217/M6dPcv2__400x400.jpg" />
		</a>
		<a class="flex items-center justify-center h-10 w-10 rounded ml-4 hover:bg-gray-700 focus:bg-gray-700" href="#">
			<svg class="h-7 w-7 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
			</svg>
		</a>
		<div class="flex-col md:hidden ml-4">
			<button class="menu-btn h-10 w-10 flex items-center justify-center rounded focus:bg-gray-700 focus:outline-none hover:bg-gray-700">
				<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
			<div class="absolute flex-col w-full bg-gray-900 py-3 px-4 rounded-br rounded-bl right-0 shadow-lg">
				<a class="h-10 flex items-center px-2 rounded font-medium hover:bg-gray-700" href="#">Link 1</a>
				<a class="h-10 flex items-center px-2 rounded font-medium hover:bg-gray-700" href="#">Link 2</a>
				<a class="h-10 flex items-center px-2 rounded font-medium hover:bg-gray-700" href="#">Link 3</a>
			</div>
		</div>

      {/* <div>Nobita & Sizuka</div>
      <div className="cursor-pointer" onClick={handleLogout}>Logout</div> */}
	</nav>
  )
}