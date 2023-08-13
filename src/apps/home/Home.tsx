import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Preview from '@/apps/home/pages/preview'

export const baseRoute= 'home'

export default function Home () {
  return <Routes>
    <Route element={<Preview/>} path={''}/>
    <Route path='*' element={<Navigate  to={baseRoute}/>} />
  </Routes>
}



