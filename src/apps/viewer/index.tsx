import React from 'react'

const Viewer = React.lazy(() => import('./Viewer'))
export { baseRoute } from './Viewer'
export default Viewer;