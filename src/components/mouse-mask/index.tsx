import React, { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import style from './style.module.scss'
import useMousePosition from '@/utils/useMousePosition'

export default function MouseMask (props: {
  className?: string | string[]
}) {
  const [x,y] = useMousePosition();

  return <>
    {
      (x !== undefined && y !== undefined) && ReactDOM.createPortal((
        <div className={cx(style.container, props.className)} style={{
          top: y,
          left: x,

        }}>
          131311111
        </div>
      ), document.body)
    }
  </>
}
