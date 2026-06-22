import React from 'react'
import ReactDOM from 'react-dom/client'
import RootRouter from './RootRouter.jsx'
import './index.css'
import './App.css'

// Registra no GA4 contatos iniciados pelo site. O page_view é enviado automaticamente pelo Google tag.
document.addEventListener('click', (event) => {
  const link = event.target.closest('a')
  if (!link || typeof window.gtag !== 'function') return

  if (link.href.includes('wa.me/')) {
    window.gtag('event', 'generate_lead', {
      method: 'whatsapp',
      link_url: link.href,
      link_text: link.textContent?.trim() || 'WhatsApp',
      page_path: window.location.pathname,
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>,
)
