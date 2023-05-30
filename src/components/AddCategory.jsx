import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 2) return;
		onNewCategory(inputValue.trim());
		setInputValue("");
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Buscar Gifs'
				value={inputValue}
				onChange={onInputChange}
			/>
			<label>
				Ingresa el nombre del gif que quieres buscar y presiona "Enter"
			</label>
		</form>
	);
};
