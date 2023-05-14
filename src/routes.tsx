import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '@/apps/home'
import Music from '@/apps/music'
import { baseRoute as homeBaseRoute } from '@/apps/home'
import { baseRoute as musicBaseRoute } from '@/apps/music'

export default function (){
  return <>
    <Routes>
      <Route path={homeBaseRoute+'/*'} element={<Home/>}/>
      <Route path={musicBaseRoute+'/*'} element={ <Music/>}/>
      <Route path={'*'} element={<Navigate to={homeBaseRoute}/>}/>
    </Routes>
  </>
}
