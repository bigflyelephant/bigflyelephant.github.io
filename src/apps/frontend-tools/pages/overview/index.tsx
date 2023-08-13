import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import styles from './index.module.scss';
export default function Overview() {

  const navigate = useNavigate()

  return <>
    <div className={styles.container}>
      <Button type='primary' onClick={() => navigate('/frontend-tools/og-tools')}>
        to og-tools
      </Button>
      <Button type='primary' onClick={() => navigate('/frontend-tools/qr-tools')}>
        to qr-tools
      </Button>
    </div>
  </>
}
