import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
    // 示例：只保留图片和分类
    {
        id: uuidv4(),
        title: '海报设计',
        category: '商业视觉与品牌设计',
        img: '/images/poster/p1.jpg',
    },
    {
        id: uuidv4(),
        title: '宣传pv',
        category: '商业视觉与品牌设计',
        img: '/images/pv/pvimg1.jpg',
    },
    // 继续添加你的作品
	{
        id: uuidv4(),
        title: '3D电子蝴蝶项目',
        category: '智能交互与硬件创新',
        img: '/images/eb/dz2.jpg',
    },
	{
        id: uuidv4(),
        title: '光栅收藏卡',
        category: 'IP卡牌与文创设计',
        img: '/images/card/1.jpg',
    },
	{
        id: uuidv4(),
        title: '红楼梦收藏卡',
        category: 'IP卡牌与文创设计',
        img: '/images/card/2.jpg',
    },
	{
        id: uuidv4(),
        title: '花仙子收藏卡',
        category: 'IP卡牌与文创设计',
        img: '/images/card/4.jpg',
    },
    {
        id: uuidv4(),
        title: 'adobe内置聊天室',
        category: '智能交互与硬件创新',
        img: '/images/card/5.jpg',
    },
];