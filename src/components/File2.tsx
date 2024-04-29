import { useContext } from 'react'
import { PropContext } from '../App.tsx'
import File3 from './File3.tsx'

const File2 = () => {
  const { value } = useContext(PropContext)
  return (
    <div>
      <h3>File 2: {value}</h3>
      <File3 />
    </div>
  )
}

export default File2