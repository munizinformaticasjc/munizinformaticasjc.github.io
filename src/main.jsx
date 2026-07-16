import React from 'react'
import ReactDOM from 'react-dom/client'
import RootRouter from './RootRouter.jsx'
import './index.css'
import './App.css'

function sendEvent(name, params) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

// Registra no GA4 contatos iniciados pelo site. O page_view é enviado automaticamente pelo Google tag.
document.addEventListener('click', (event) => {
  const link = event.target.closest('a')
  if (!link) return

  if (link.href.includes('wa.me/')) {
    const payload = {
      method: 'whatsapp',
      link_url: link.href,
      link_text: link.textContent?.trim() || 'WhatsApp',
      page_path: window.location.pathname,
    }
    sendEvent('clique_whatsapp', payload)
    sendEvent('solicitar_orcamento', payload)
    sendEvent('generate_lead', payload)
  }

  if (link.href.startsWith('tel:')) {
    sendEvent('clique_telefone', {
      link_url: link.href,
      page_path: window.location.pathname,
    })
  }

  if (link.href.includes('google.com/maps')) {
    sendEvent('abrir_google_maps', {
      link_url: link.href,
      link_text: link.textContent?.trim() || 'Google Maps',
      page_path: window.location.pathname,
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>,
)
