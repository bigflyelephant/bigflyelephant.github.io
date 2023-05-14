import Meta from '@/components/meta'
import Routes from '@/routes'
import useMousePosition from '@/utils/useMousePosition'
import MouseMask from '@/components/mouse-mask'

function App () {
  return (
    <>
      <MouseMask/>
      <Routes/>
    </>
  )
}

export default App
