import { PropContext } from '../App.tsx'
import File2 from './File2.tsx'
import { useContext } from 'react'

const File1 = () => {
  const { value } = useContext(PropContext)
  return (
    <div>
      <h3>File 1: {value}</h3>
      <File2 />
    </div>
  )
}

export default File1