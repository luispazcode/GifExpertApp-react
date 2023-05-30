import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LoadingSpinner } from "./LoadingSpinner";
import { DeleteButton } from "./DeleteButton";

export const GiftGrid = ({ category, deleteCategory }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<div className='header-grid'>
				<h3>{category}</h3>
				<DeleteButton category={category} deleteCategory={deleteCategory} />
			</div>
			{isLoading && <LoadingSpinner />}
			<div className='card-grid'>
				{images.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
