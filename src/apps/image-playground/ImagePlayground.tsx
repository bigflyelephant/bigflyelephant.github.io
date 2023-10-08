import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Overview from './pages/overview'


export default function ImagePlayground () {
  return (
      <Layout>
        <Routes>
          <Route element={<Overview/>} path={''} />
          <Route path="*" element={<Navigate to={''}/>}/>
        </Routes>
      </Layout>
  )
}



