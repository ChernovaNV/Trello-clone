import { createRoot } from 'react-dom/client'
import App from 'app/App'

import { Global } from './Global.styles'

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
	<>
		<Global />
		<App />
	</>
)
