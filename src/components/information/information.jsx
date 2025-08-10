// import useState from 'react';
import { InformationLayout } from './Information.layout';
//import styles from './information.module.css';

export const Information = ({ gameState }) => {
	return <InformationLayout {...gameState} />;
};
