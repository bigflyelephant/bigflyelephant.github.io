import { Outlet, useNavigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { Button, Card } from 'antd'
import { LeftOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

type Props = {}

export default function Layout(props: PropsWithChildren<Props>) {
  const n = useNavigate();

  return <div className={styles.container}>
    <Card size='small' title={<Button type='link' onClick={()=>n(-1)}><LeftOutlined /> Back</Button>}>
    {props.children}
    </Card>
  </div>
}
