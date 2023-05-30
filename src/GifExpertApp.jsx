import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
	};

	const onDeleteCategory = (category) => {
		setCategories(categories.filter((cat) => cat !== category));
	};

	console.log(categories);

	return (
		<>
			<h2>GiftExpertApp</h2>

			<AddCategory onNewCategory={onAddCategory} />

			{categories.map((category) => (
				<GiftGrid
					key={category}
					category={category}
					deleteCategory={onDeleteCategory}
				/>
			))}
		</>
	);
};
