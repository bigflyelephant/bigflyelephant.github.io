import { Navigate, Route, Routes } from "react-router-dom"
import TxtViewer from "./pages/txt-viewer"

export const baseRoute= 'viewer'

export default function Home () {
  return <Routes>
    <Route element={<TxtViewer/>} path={''}/>
    <Route path='*' element={<Navigate  to={baseRoute}/>} />
  </Routes>
}
