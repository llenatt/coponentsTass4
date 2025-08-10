import styles from './Field.module.css';
import { FieldLayout } from './FieldLayout';
export const Field = ({ gameState }) => {
	return (
		<div className={styles.fieldContainer}>
			<FieldLayout {...gameState} />
		</div>
	);
};
