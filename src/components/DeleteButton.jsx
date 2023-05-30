export const DeleteButton = ({ category, deleteCategory }) => {
	const onDeleteCategory = (event) => {
		event.preventDefault();
		deleteCategory(category);
	};
	return <button onClick={onDeleteCategory}>Eliminar</button>;
};
