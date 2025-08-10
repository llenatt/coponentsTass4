import styles from './game.module.css';
import { useState } from 'react';
import { GameLayout, Field } from './components';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

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

	return (
		<div className={styles.game}>
			<h1 className={styles.title}>Игра 'Крестики-Нолики'</h1>
			<GameLayout gameState={gameState} />
			<Field gameState={gameState} />
		</div>
	);
};
