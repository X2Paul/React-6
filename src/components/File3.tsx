import { useContext } from 'react'
import { PropContext } from '../App.tsx'
import File4 from './File4.tsx'

const File3 = () => {
  const { value } = useContext(PropContext)
  return (<div>
    <h3>File 3: {value}</h3>
    <File4 />
  </div>
  )
}

export default File3