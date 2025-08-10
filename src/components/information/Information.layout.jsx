import styles from './information.module.css';
export const InformationLayout = ({
	currentPlayer,
	isDraw,
	isGameEnded,
	setField,
	setCurrentPlayer,
	setIsDraw,
	setIsGameEnded,
}) => {
	const handleRestart = () => {
		setIsGameEnded(false);
		setField(['', '', '', '', '', '', '', '', '']);
		setCurrentPlayer('X');
		setIsDraw(false);
	};
	return (
		<div className={styles.information_container}>
			{isDraw ? (
				<div>Ничья</div>
			) : isGameEnded ? (
				<div>Победа: {currentPlayer}</div>
			) : (
				<div>Ходит: {currentPlayer}</div>
			)}
			{isGameEnded && (
				<button
					onClick={() => {
						handleRestart();
					}}
				>
					Начать заново
				</button>
			)}
		</div>
	);
};
