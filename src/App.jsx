import styles from './game.module.css';
import { useState } from 'react';
import { GameLayout, Field } from './components';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

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

	const gameState = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
	};

	const changePlayer = () => {
		if (currentPlayer === 'X') {
			setCurrentPlayer('O');
		} else {
			setCurrentPlayer('X');
		}
	};
	const winCheck = (currentPlayer, newField) => {
		return WIN_PATTERNS.some((pattern) => {
			return pattern.every((index) => {
				return newField[index] === currentPlayer;
			});
		});
	};
	const handleClick = (clickedCellIndex) => {
		if (!isGameEnded) {
			const newField = field.map((cell, index) => {
				if (index === clickedCellIndex && cell === '') {
					return currentPlayer;
				} else {
					return cell;
				}
			});
			setField(newField);
			if (winCheck(currentPlayer, newField)) {
				setIsGameEnded(true);
			} else if (newField.every((cell) => cell !== '')) {
				setIsDraw(true);
				setIsGameEnded(true);
			} else if (field[clickedCellIndex] == '') {
				changePlayer();
			}
		}
	};

	return (
		<div className={styles.game}>
			<h1 className={styles.title}>Игра 'Крестики-Нолики'</h1>
			<GameLayout gameState={gameState} />
			<Field field={field} handleClick={handleClick} />
		</div>
	);
};
