
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDownCircle } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { useState, useEffect } from 'react';


function AppBanner() {
	const [activeTheme] = useThemeSwitcher();
	const images = [
		'/images/首页轮播/1.jpg',
		'/images/首页轮播/2.jpg',
		'/images/首页轮播/3.jpg',
		'/images/首页轮播/4.jpg',
		'/images/首页轮播/5.jpg',
		'/images/首页轮播/6.jpg',
		'/images/首页轮播/7.jpg',
		'/images/首页轮播/8.jpg',
		'/images/首页轮播/9.jpg',
		'/images/首页轮播/10.jpg'
	];
	const [current, setCurrent] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 3000);
		return () => clearInterval(timer);
	}, [images.length]);

       return (
	      <>
	      <motion.section
		      initial={{ opacity: 0 }}
		      animate={{ opacity: 1 }}
		      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		      className="flex flex-col sm:flex-row items-stretch mt-0 pt-8 pb-8 px-2 sm:px-8 max-w-screen-xl mx-auto"
	      >
		      {/* 左侧整体：马御恒+副标题+自我介绍，带灰色背景和红色边框 */}
		      <div className="relative flex flex-col min-w-[340px] max-w-[700px] w-full sm:w-[700px] p-8 mr-8 bg-gray-100 rounded-xl">
			      {/* 内容区 */}
			      <div className="flex flex-col items-start justify-start h-full">
				      <motion.h1
					      initial={{ opacity: 0 }}
					      animate={{ opacity: 1 }}
					      transition={{
						      ease: 'easeInOut',
						      duration: 0.9,
						      delay: 0.1,
					      }}
					      className="font-general-semibold text-5xl md:text-7xl font-bold mb-4 text-left text-ternary-dark dark:text-primary-light"
				      >
					      <span className="flex flex-row items-end justify-start">
						      <span>马御恒</span>
					      </span>
				      </motion.h1>
				      <motion.p
					      initial={{ opacity: 0 }}
					      animate={{ opacity: 1 }}
					      transition={{
						      ease: 'easeInOut',
						      duration: 0.9,
						      delay: 0.15,
					      }}
					      className="text-xl md:text-2xl text-gray-500 mb-2 text-left"
				      >
					      独立设计师
				      </motion.p>
				      <motion.p
					      initial={{ opacity: 0 }}
					      animate={{ opacity: 1 }}
					      transition={{
						      ease: 'easeInOut',
						      duration: 0.9,
						      delay: 0.18,
					      }}
					      className="text-lg md:text-l text-gray-500 mb-6 text-left"
				      >
					      用设计与技术，让想法变为现实
				      </motion.p>
				      {/* 自我介绍 */}
				      <div className="text-base md:text-sm text-gray-600 text-left">
					      <p className="mb-4">我是一名创意开发者与产品塑造者，热衷于打造视觉与触觉精准平衡的实体产品，将前沿创意与可规模化的印刷工程融为一体。我最热爱的工作在于创意与制造的交叉点——创造的产品不仅令人惊艳，更是为生产落地与用户体验而精心构建。</p>
					      <p className="mb-4">目前，我作为独立设计师与商品化专家，专注于光栅视觉与卡牌工艺领域。我负责从3D建模、动态渲染到印刷生产落地的全流程开发，曾主导推出现象级光栅卡片系列，在社交媒体引发广泛热议并取得显著商业增长。</p>
					      <p className="mb-4">过去，我有机会参与各类创意项目的开发与推广——从产品视觉体系构建、宣传Banner设计到新品PV动画制作。此外，我也活跃于跨界创意领域，以DJ身份为艺术画展构建氛围体验，这种多领域实践持续为我的产品注入叙事感染力。</p>
					      <p>在业余时间，我通常会做DJ、探索视听表达，和女友一起看展布展，或者制作音乐，录制自己的个人音乐电台。</p>
				      </div>
			      </div>
		      </div>
		      {/* 右侧图片区域，放大并填满高度 */}
		      <motion.div className="relative flex-1 flex-shrink-0 flex items-stretch justify-end">
			      <div className="relative z-10 w-full flex items-stretch">
				      <Image
					      src={images[current]}
					      alt={`轮播图${current + 1}`}
					      fill
					      className="rounded-lg object-cover w-full h-full transition-all duration-700"
					      priority
				      />
			      </div>
		      </motion.div>
	      </motion.section>
				{/* 新增一行小字，支持span和换行 */}
				<div className="w-full text-left text-sm text-gray-400 mt-0 px-4 sm:px-8">
					<span>Mear / Design & Art Practice</span><br />
					<span>Working globally from Guangzhou. A vessel of persistence through tangible creation.</span><br />
					<span>Crossing domains: design, DJing, exhibition soundscapes. Music producer. Independent radio. mear.com</span>
				</div>
	      </>
	);
}

export default AppBanner;
