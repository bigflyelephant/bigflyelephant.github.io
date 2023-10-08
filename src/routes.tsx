import { Navigate, Route, Routes } from 'react-router-dom'
import Home, { baseRoute as homeBaseRoute } from '@/apps/home'
import Music, { baseRoute as musicBaseRoute } from '@/apps/music'
import Viewer, { baseRoute as viewerBaseRoute } from '@/apps/viewer'
import FrontendTools, { baseRoute as frontendToolsBaseRoute } from '@/apps/frontend-tools'
import ImagePlayground, { baseRoute as imagePlaygroundBaseRoute } from '@/apps/image-playground'
import { Suspense } from 'react'

const configs = [
  {
    path: homeBaseRoute,
    element: Home,
  },
  {
    path: viewerBaseRoute,
    element: Viewer,
  },
  {
    path: musicBaseRoute,
    element: Music,
  },
  {
    path: frontendToolsBaseRoute,
    element: FrontendTools,
  },
  {
    path: imagePlaygroundBaseRoute,
    element: ImagePlayground,
  },
]

export default function () {
  return <>
    <Routes>
      {
        configs.map(item => <Route path={item.path + '/*'} element={<Suspense><item.element /></Suspense>} />)
      }
      <Route path={'*'} element={<Navigate to={homeBaseRoute} />} />
    </Routes>
  </>
}
