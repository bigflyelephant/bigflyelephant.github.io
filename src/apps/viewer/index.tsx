import React from 'react'

const Viewer = React.lazy(() => import('./Viewer'))
export const baseRoute= 'viewer'
export default Viewer;