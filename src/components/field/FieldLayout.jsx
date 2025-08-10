import styles from './FieldLayout.module.css';
export const FieldLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	//isDraw,
	setIsDraw,
}) => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];
	const changePlayer = () => {
		if (currentPlayer === 'X') {
			setCurrentPlayer('O');
		} else {
			setCurrentPlayer('X');
		}
	};
	const handleClick = (clickedCellIndex) => {
		if (!isGameEnded) {
			const newField = field.map((cell, index) => {
				if (clickedCellIndex === index && cell === '') {
					changePlayer();
					return currentPlayer;
				} else {
					return cell;
				}
			});

			WIN_PATTERNS.forEach(([a, b, c]) => {
				if (
					newField[a] &&
					newField[a] === newField[b] &&
					newField[a] === newField[c]
				) {
					setCurrentPlayer(newField[a]);
					setIsGameEnded(true);
				}
			});
			if (
				newField.every((cell) => {
					return cell != '';
				})
			) {
				setIsDraw(true);
				setIsGameEnded(true);
			}
			setField(newField);
		}
	};
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
