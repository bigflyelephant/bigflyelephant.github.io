import { Link, useNavigate } from 'react-router-dom'

export default function Overview () {

  const navigate = useNavigate()

  return <>music overview ,<Link  to={'tools'}>to tools</Link></>
}
