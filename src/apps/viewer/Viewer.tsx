import { Navigate, Route, Routes } from "react-router-dom"
import { baseRoute } from "."
import TxtViewer from "./pages/txt-viewer"



export default function Home () {
  return <Routes>
    <Route element={<TxtViewer/>} path={''}/>
    <Route path='*' element={<Navigate  to={baseRoute}/>} />
  </Routes>
}
