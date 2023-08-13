import { Outlet, useNavigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

type Props = {}

export default function Layout(props: PropsWithChildren<Props>) {
  const n = useNavigate();

  return <div className={styles.container}>
    { <div >
      <Button type='link' onClick={()=>n(-1)}><LeftOutlined /> Back</Button>
    </div>}
    {props.children}
  </div>
}
