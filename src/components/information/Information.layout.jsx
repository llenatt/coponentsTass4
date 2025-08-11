import styles from './information.module.css';
export const InformationLayout = ({
	currentPlayer,
	isDraw,
	isGameEnded,
	handleRestart,
}) => {
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
