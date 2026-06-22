import React from 'react'
import App from './App.jsx'
import { NotFoundPage, ServicePage } from './ServicePage.jsx'
import { serviceBySlug } from './serviceData.js'

function getSlugFromPath() {
  return window.location.pathname.replace(/^\/+|\/+$/g, '')
}

export default function RootRouter() {
  const slug = getSlugFromPath()
  if (!slug) return <App />
  if (serviceBySlug[slug]) return <ServicePage slug={slug} />
  return <NotFoundPage />
}
