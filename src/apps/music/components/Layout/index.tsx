import { Outlet } from 'react-router-dom'
import { PropsWithChildren } from 'react'

type Props={}

export  default function Layout(props:PropsWithChildren<Props>){
  return <>
    {props.children}
  </>
}
