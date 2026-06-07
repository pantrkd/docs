import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

import OpenAPI from './openapi.json'
import { useState } from 'react'

function App() {
  const [spec] = useState({ ...OpenAPI })

  return (
    <ApiReferenceReact
      configuration={{
        content: spec,
      }}
    />
  )
}

export default App