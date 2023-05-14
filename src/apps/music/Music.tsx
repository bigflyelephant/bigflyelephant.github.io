import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Overview from '@/apps/music/pages/overview'
import Layout from '@/apps/music/components/Layout'
import Tools from '@/apps/music/pages/tools'
import { Provider } from 'react-redux'
import store from './store'

export const baseRoute = 'music'

export default function Music () {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route element={<Tools/>} path={'tools'}/>
          <Route element={<Overview/>} path={''}/>
          <Route path="*" element={<Navigate to={''}/>}/>
        </Routes>
      </Layout>
    </Provider>
  )
}



