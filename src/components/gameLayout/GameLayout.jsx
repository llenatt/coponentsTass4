import styles from './gameLayout.module.css';
import { Information } from '../information/information';

export const GameLayout = ({ gameState }) => {
	return (
		<div className={styles.gameLayout}>
			<Information gameState={gameState} />
		</div>
	);
};
