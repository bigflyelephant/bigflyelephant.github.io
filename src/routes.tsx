import { Navigate, Route, Routes } from 'react-router-dom'
import Home,{ baseRoute as homeBaseRoute } from '@/apps/home'
import Music,{ baseRoute as musicBaseRoute } from '@/apps/music'
import Viewer, { baseRoute as viewerBaseRoute } from '@/apps/viewer'
import FrontendTools, { baseRoute as frontendToolsBaseRoute } from '@/apps/frontend-tools'

export default function () {
  return <>
    <Routes>
      <Route path={homeBaseRoute + '/*'} element={<Home />} />
      <Route path={viewerBaseRoute + '/*'} element={<Viewer />} />
      <Route path={musicBaseRoute + '/*'} element={<Music />} />
      <Route path={frontendToolsBaseRoute + '/*'} element={<FrontendTools />} />
      <Route path={'*'} element={<Navigate to={homeBaseRoute} />} />
    </Routes>
  </>
}
