import styles from './FieldLayout.module.css';
export const FieldLayout = ({ field, handleClick }) => {
	return field.map((cell, index) => {
		return (
			<div
				key={index}
				onClick={() => {
					handleClick(index);
				}}
				className={styles.cell}
			>
				{cell}
			</div>
		);
	});
};
