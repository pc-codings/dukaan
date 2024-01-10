import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'Home',
		label: 'Home',
		path: '/',
		icon: "/images/navbar-home.png"
	},
	{
		key: 'Order',
		label: 'Order',
		path: '/products',
		icon: "/images/navbar-orders.png"
	},
	{
		key: 'Products',
		label: 'Products',
		path: '/orders',
		icon: "/images/navbar-products.png"
	},
	{
		key: 'Delivery',
		label: 'Delivery',
		path: '/transactions',
		icon: "/images/navbar-delivery.png"
	},
	{
		key: 'Marketing',
		label: 'Marketing',
		path: '/messages',
		icon: "/images/navbar-marketing.png"
	},
	{
		key: 'Analytics',
		label: 'Analytics',
		path: '/messages',
		icon: "/images/navbar-analytics.png"
	},
	{
		key: 'Payouts',
		label: 'Payouts',
		path: '/messages',
		icon: "/images/navbar-home.png"
	},
	{
		key: 'Discounts',
		label: 'Discounts',
		path: '/messages',
		icon: "/images/navbar-discounts.png"
	},
	{
		key: 'Audience',
		label: 'Audience',
		path: '/messages',
		icon: "/images/navbar-audience.png"
	},
	{
		key: 'Appearance',
		label: 'Appearance',
		path: '/messages',
		icon: "/images/navbar-appearance.png"
	},
	{
		key: 'Plugins',
		label: 'Plugins',
		path: '/messages',
		icon: "/images/navbar-plugins.png"
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
