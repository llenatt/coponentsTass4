// import useState from 'react';
import { InformationLayout } from './Information.layout';
//import styles from './information.module.css';

export const Information = ({
	setIsGameEnded,
	setField,
	setCurrentPlayer,
	setIsDraw,
	currentPlayer,
	isDraw,
	isGameEnded,
}) => {
	const handleRestart = () => {
		setIsGameEnded(false);
		setField(['', '', '', '', '', '', '', '', '']);
		setCurrentPlayer('X');
		setIsDraw(false);
	};
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			handleRestart={handleRestart}
		/>
	);
};
