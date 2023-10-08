import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Preview from '@/apps/home/pages/preview'
import { baseRoute } from '.'

export default function Home () {
  return <Routes>
    <Route element={<Preview/>} path={''}/>
    <Route path='*' element={<Navigate  to={baseRoute}/>} />
  </Routes>
}



