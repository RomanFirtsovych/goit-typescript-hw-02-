import styles from './ErrorMessage.module.css';
import { ErrorMessageProps } from '../../types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;