import React, { useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { getOrderStatus } from '../lib/helpers';
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'

const payoutData = [
  {
    id: '281209',
    transaction_id: '12387163',
    amount: '$500',
    date: '2022-06-01',
    status: '🟢Completed',
  },
  {
    id: '281902',
    transaction_id: '567818738',
    amount: '$800',
    date: '2022-06-03',
    status: '⚪️Processing',
  },
  {
    id: '281933',
    transaction_id: '5183678',
    amount: '$800',
    date: '2022-06-03',
    status: '⚪️Processing',
  },
  {
    id: '381902',
    transaction_id: '56783791',
    amount: '$800',
    date: '2022-06-03',
    status: '🟢Successful',
  },
  {
    id: '321902',
    transaction_id: '18375678',
    amount: '$800',
    date: '2022-06-03',
    status: '⚪️Processing',
  },
  {
    id: '291902',
    transaction_id: '9375678',
    amount: '$800',
    date: '2022-06-03',
    status: '⚪️Processing',
  },
];

const refundData = [
	{
		id: '281933',
		transaction_id: '5183678',
		date: '2022-06-03',
		amount: '$800',
		date: '2022-06-03',
		status: '⚪️Processing',
	  },
	  {
		id: '381902',
		transaction_id: '56783791',
		amount: '$800',
		date: '2022-06-03',
		status: '🟢Successful',
	  },
	  {
		id: '321902',
		transaction_id: '18375678',
		amount: '$800',
		date: '2022-06-03',
		status: '⚪️Processing',
	  },
	  {
		id: '291902',
		transaction_id: '9375678',
		amount: '$800',
		date: '2022-06-03',
		status: '🟢Successful',
	  },
];

export default function RecentOrders() {
	const [activeButton, setActiveButton] = useState('payout');
	const [searchQuery, setSearchQuery] = useState('');
  
	const handleButtonClick = (buttonType) => {
	  setActiveButton(buttonType);
	};
  
	const dataToDisplay = activeButton === 'payout' ? payoutData : refundData;
  
	// Filter data based on search query
	const filteredData = dataToDisplay.filter((item) =>
	  item.id.toLowerCase().includes(searchQuery.toLowerCase())
	);
  
	return (
	  <div className="w-full">
		<div>
		<p className={`text-xl h-7 text-[#1A181E] font-medium`}>
            Transactions | This Month
          </p>
		</div>
		<div className="flex gap-5 ">
		  <button
			onClick={() => handleButtonClick('payout')}
			className={`border rounded-full p-3 mx-3 my-3 ${
			  activeButton === 'payout'
				? 'bg-sky-600 text-white'
				: 'bg-gray-200 text-gray-600'
			}`}
		  >
			Payouts (22)
		  </button>
		  <button
			onClick={() => handleButtonClick('refund')}
			className={`border rounded-full p-3 my-3 ${
			  activeButton === 'refund'
				? 'bg-sky-600 text-white'
				: 'bg-gray-200 text-gray-600'
			}`}
		  >
			Refund (6)
		  </button>
		</div>
		<div className="flex justify-between mb-3">
		  <div className="relative">
			<HiOutlineSearch
			  fontSize={20}
			  className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
			/>
				<input
					type="text"
					placeholder="OrderID or Transaction ID"
					className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
				/>
		  </div>
		  <div className="flex gap-5">
		  	<div className="flex h-9 w-24 border border-gray-300 justify-between px-4 items-center">
				<p className='text-gray-600'>Sort</p>
              <img
			  className='h-4'
                src="/images/button-outlined-sort.png"
                alt="button-outlined-sort"
              />
            </div>
			<div
            className=
               "border-[1px] border w-9 rounded flex justify-center items-center border-[#D9D9D9] h-9"
          >
            <img src="/images/icons-download.png" alt="icons-download" />
          </div>
			
		  </div>
		</div>
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 w-full">
		  <strong className="text-gray-700 font-medium">Recent Orders</strong>
		  <div className="border-x border-gray-200 rounded-sm mt-3">
			<table className="w-full text-gray-700">
			  <thead>
				<tr>
				  <th>OrderID</th>
				  <th>Status</th>
				  <th>transaction Id</th>
				  <th>{activeButton === 'payout' ? 'Transaction Fee' : 'Refund Date'}</th>
				  <th>{activeButton === 'payout' ? 'Total' : 'Order Amount'}</th>
				</tr>
			  </thead>
			  <tbody>
				{filteredData.map((item) => (
				  <tr key={item.id}>
					<td className="">{item.id}</td>
					<td>{item.status}</td>
					<td>{item.transaction_id}</td>
					<td>
					  {activeButton === 'payout' ? (
						<Link to={`/transaction/${item.amount}`}>{item.amount}</Link>
					  ) : (
						<Link to={`/order/${item.order_id}`}>{item.date}</Link>
					  )}
					</td>
					<td>{item.amount}</td>
				  </tr>
				))}
			  </tbody>
			</table>
		  </div>
		</div>
	  </div>
	);
  }
