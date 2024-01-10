import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople} from 'react-icons/io5'

export default function DashboardStatsGrid() {
	return (
		<div>
			<div className='mb-6 mt-6 flex justify-between'> 
			<div
              className=
                "w-[91px] w-auto font-medium text-xl h-7 text-[#1A181E]"
            >
              Overview
            </div>
			<select  className="w-[7rem] h-[2rem] text-[#4D4D4D] font-normal text-base ml-3.5 my-1.5 border border-black"name="This Month" id="This Month">
			<option value="">This Month</option>
			</select>
			</div>
			<div className="flex gap-4">
				<BoxWrapper>
					<div className='bg-sky-600 h-full w-full border border-black flex flex-col justify-center  gap-4 rounded-lg'>
						<div className='mt-4 px-10 py-4 flex gap-2'>
							<h2>Next Payout </h2>
							<img className='h-5' src="/images/dashboard-outlined-help.png" alt="" />
						</div>
						<div className='flex justify-between px-10'>
							<h2 className='text-[2rem] font-bold'>₹2312.23</h2>
							<h2 className='underline mb-2 font-bold'>23 order ></h2>
						</div>
						<div className='flex justify-between items-center mt-2 bg-sky-900 w-full h-full px-10'>
							<h2>Next Payout Date:</h2>
							<h2>Today,04:00pm</h2>
						</div>
					</div>
				</BoxWrapper>
				<BoxWrapper>
				<div className='text-black h-full w-full flex flex-col justify-center  gap-4 rounded-lg  border border-gray shadow-md'>
						<div className='mt-4 px-10 py-4 flex gap-2'>
							<h2>Amount Pending</h2>
							<img className='h-5' src="/images/dashboard-outlined-help.png" alt="" />
						</div>
						<div className='flex justify-between px-10 '>
							<h2 className='text-[2rem]'>₹92312.20</h2>
							<h2 className='underline mb-2 text-blue-700'>13 order ></h2>
						</div>
						<div className='flex text-white border-white justify-between items-center mt-2  w-full h-full px-10'>
						</div>
					</div>
				</BoxWrapper>
				<BoxWrapper>
				<div className='text-black h-full w-full flex flex-col justify-center  gap-4 rounded-lg  border border-gray shadow-md'>
						<div className='mt-4 px-10 py-4 flex gap-2'>
							<h2>Amount Proccessed </h2>
							<img className='h-5' src="/images/dashboard-outlined-help.png" alt="" />
						</div>
						<div className='flex justify-between px-10 '>
							<h2 className='text-[2rem]'>₹23,92,312.19</h2>
							<h2 className='text-white'>13 order ></h2>
						</div>
						<div className='flex text-white border-white justify-between items-center mt-2  w-full h-full px-10'>
						</div>
					</div>
				</BoxWrapper>
			</div>
		</div>
		
	)
}

function BoxWrapper({ children }) {
	return <div className="h-[12rem] h-100 rounded-md  flex-1 flex items-center text-white">{children}</div>
}
