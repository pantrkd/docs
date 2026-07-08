import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'
import './UIClutterOverride.css'

import OpenAPI from './openapi.json'
import { useEffect, useState } from 'react'

function App() {
  const [spec] = useState({ ...OpenAPI })

  useEffect(() => {
    document.querySelectorAll<HTMLButtonElement>('button').forEach((btn) => {
      if (btn.textContent?.trim() === 'Ask AI') {
        btn.classList.add('ask-ai-button');
      }
    });
  }, []);

  return (
    <ApiReferenceReact
      configuration={{
        content: spec,
      }}
    />
  )
}

export default App