import React, { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

export default function Header() {
	const navigate = useNavigate()

	return (
		<div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
			<div className="relative ml-4 flex gap-4">
				<p>Payouts</p>
				<div className='flex gap-2 mt-1'>
				<img className="h-4"src="/images/dashboard-outlined-help.png" alt="" />
				<p className=" w-20 text-[#4D4D4D] font-normal h-4 text-xs">
          			How it works
        		</p>

				</div>

			
			</div>
			<div className="relative">
				<HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
				<input
					type="text"
					placeholder="Search, Features , Tutorials, etc"
					className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
				/>
			</div>
			<div className='flex gap-4 mx-2'> 
				<img className='h-8 w-8 mt-1' src="/images/dashboard-icons-group.png" alt="" />
				<img className='h-10 w-10' src="/images/dashboard-icons-menu.png" alt="" />
				
			</div>

		</div>
	)
}
