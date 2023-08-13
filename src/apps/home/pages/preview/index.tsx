import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from './index.module.scss';

export default function Preview() {
  const history = useNavigate();
  return <>
    <div className={styles.container}>
      <Button type='primary' onClick={() => history('/frontend-tools')}>
        toUtils
      </Button>
    </div>
  </>
}
