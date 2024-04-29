import { useContext } from 'react'
import { PropContext } from '../App.tsx'

const File4 = () => {
  const { value } = useContext(PropContext)
  return (<div>
      <h3>File 4: {value}</h3>
    </div>
  )
}

export default File4