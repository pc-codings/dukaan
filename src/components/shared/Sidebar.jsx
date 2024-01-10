import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	return (
		<div className="bg-neutral-900 w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
				<img src='/images/profile_pic.png'/>
				<div className='flex flex-col'>
				<span className="text-neutral-200 text-lg">Nishyan</span>
				<span className="text-neutral-200 text-sm">Visit Store</span>

				</div>

				
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className='flex gap-4 bg-slate-800'>
				<img className='w-[2rem] h-[2rem]' src="images/navbar-creds.png" alt="" />
				<div className='text-white'>
					<p>Available Credit</p>
					<p>221.10</p>
				</div>
			</div>

		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
		>
			
			<img src={link.icon} alt="" />
			{link.label}
		</Link>
	)
}
