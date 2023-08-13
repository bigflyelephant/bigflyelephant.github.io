import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/apps/frontend-tools/components/Layout'
import Overview from './pages/overview'
import OgTools from './pages/seo/og-tools'
import QrCodeUtils from './pages/qr-code-utils'

export const baseRoute = 'frontend-tools'

export default function Music () {
  return (
      <Layout>
        <Routes>
          <Route element={<Overview/>} path={''} />
          <Route element={<OgTools/>} path={'og-tools'}/>
          <Route element={<QrCodeUtils/>} path={'qr-tools'}/>
          <Route path="*" element={<Navigate to={''}/>}/>
        </Routes>
      </Layout>
  )
}



