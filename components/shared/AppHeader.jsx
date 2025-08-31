import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiX, FiMenu } from 'react-icons/fi';
import logoLight from '../../public/images/logo-light.svg';
import logoDark from '../../public/images/logo-dark.svg';

function AppHeader() {
	const [showMenu, setShowMenu] = useState(false);
	// const [showModal, setShowModal] = useState(false);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}



	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			{/* Header */}
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6 bg-transparent">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link href="/">
							<Image
								src={logoLight}
								className="w-36 cursor-pointer"
								alt="Logo"
								width={150}
								height={120}
							/>
						</Link>
					</div>



					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<div className="block text-left sm:mx-4 mb-2 sm:py-2">
						<Link href="/projects" aria-label="Projects">
							<div className="flex flex-col items-center">
								<span className="text-lg text-primary-dark dark:text-ternary-light font-medium">作品集</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">Projects</span>
							</div>
						</Link>
					</div>
					<div className="block text-left sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<Link href="/about" aria-label="About Me">
							<div className="flex flex-col items-center">
								<span className="text-lg text-primary-dark dark:text-ternary-light font-medium">关于我</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">About Me</span>
							</div>
						</Link>
					</div>
					<div className="block text-left sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<Link href="/contact" aria-label="Contact">
							<div className="flex flex-col items-center">
								<span className="text-lg text-primary-dark dark:text-ternary-light font-medium">联系方式</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">Contact</span>
							</div>
						</Link>
					</div>

				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<div className="block text-left sm:mx-4 mb-2 sm:py-2" aria-label="Projects">
						<Link href="/projects">
							<div className="flex flex-col items-center">
								<span className="text-lg text-primary-dark dark:text-ternary-light font-medium">作品集</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">Projects</span>
							</div>
						</Link>
					</div>
					<div className="block text-left sm:mx-4 mb-2 sm:py-2" aria-label="About Me">
						<Link href="/about">
							<div className="flex flex-col items-center">
								<span className="text-lg text-primary-dark dark:text-ternary-light font-medium">关于我</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">About Me</span>
							</div>
						</Link>
					</div>
					<div className="block text-left sm:mx-4 mb-2 sm:py-2" aria-label="Contact">
						<Link href="/contact">
							<div className="flex flex-col items-center">
								<span className="text-lg text-primary-dark dark:text-ternary-light font-medium">联系方式</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">Contact</span>
							</div>
						</Link>
					</div>
				</div>

				{/* Header right section buttons */}

			</div>

		</motion.nav>
	);
}

export default AppHeader;
