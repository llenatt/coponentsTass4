import styles from './Field.module.css';
import { FieldLayout } from './FieldLayout';
export const Field = ({ field, handleClick }) => {
	return (
		<div className={styles.fieldContainer}>
			<FieldLayout field={field} handleClick={handleClick} />
		</div>
	);
};
