import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/index.css';

import App from './App';
import { AppProviders } from './contexts';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppProviders>
			<App />
		</AppProviders>
	</StrictMode>,
);
