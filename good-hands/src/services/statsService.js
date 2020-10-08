	const foundations = [
		{
			id: 1,
			foundation: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},
		{
			id: 2,
			foundation: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},	
		{
			id: 3,
			foundation: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},	
		{
			id: 4,
			foundation: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},	
		{
			id: 5,
			foundation: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},	
		{
			id: 6,
			foundation: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},	
		{
			id: 7,
			foundation: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},	
		{
			id: 8,
			foundation: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},	
		{
			id: 9,
			foundation: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},		
	];
	
	const ngo = [
		{
			id: 1,
			ngo: 'ngo ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},
		{
			id: 2,
			ngo: 'ngo ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},
		{
			id: 3,
			ngo: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},
		{
			id: 4,
			ngo: 'ngo ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},
		{
			id: 5,
			ngo: 'ngo ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},
		{
			id: 6,
			ngo: 'ngo ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},
	];
	
	const local = [
		{
			id: 1,
			ngo: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},
		{
			id: 1,
			ngo: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},
		{
			id: 1,
			ngo: 'Lorem ipsum mariusz popsuł ',
			desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
			tags: 'et quas molestias',
		},
	];

export const fetchStats = () => {
	return new Promise((resolve, reject) => {
  	setTimeout(() => resolve({ foundations, ngo, local }), 300);
  });
};
