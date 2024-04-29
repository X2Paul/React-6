import { createContext } from 'react'
import File1 from './components/File1.tsx'
import { FileInterface } from './components/FileInterface.ts'

export const PropContext = createContext<FileInterface>({ value: "text" })
const App = () => {
  const propValue = 'App component'

  return (
    <PropContext.Provider value={{ value: propValue }}>
    <div>
    <h1>App component</h1>
    <File1 />
  </div>
      </PropContext.Provider>
  )
}

export default App
