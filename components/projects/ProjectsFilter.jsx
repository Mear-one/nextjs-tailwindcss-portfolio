const categories = [
	'商业视觉与品牌设计',
	'IP卡牌与文创设计',
	'智能交互与硬件创新',
	'个人艺术与创意探索',
];

function ProjectsFilter({ setSelectProject }) {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
			<option value={setSelectProject} className="text-sm sm:text-md">
				All Projects
			</option>

			{categories.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
}

export default ProjectsFilter;
