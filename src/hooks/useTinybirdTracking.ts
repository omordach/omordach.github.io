import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ENDPOINT = 'https://api.tinybird.co/v0/events?name=page_events'
const TOKEN = import.meta.env.VITE_TINYBIRD_TOKEN

function getSessionId(): string {
  const key = 'tb_sid'
  let id = sessionStorage.getItem(key)
  if (!id) {
    id = crypto.randomUUID()
    sessionStorage.setItem(key, id)
  }
  return id
}

export function useTinybirdTracking() {
  const location = useLocation()

  useEffect(() => {
    if (!TOKEN) return
    const payload = JSON.stringify({
      timestamp: new Date().toISOString(),
      pathname: location.pathname,
      referrer: document.referrer,
      session_id: getSessionId(),
    })
    const url = `${ENDPOINT}&token=${TOKEN}`
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([payload], { type: 'application/json' }))
    } else {
      fetch(url, { method: 'POST', body: payload }).catch(() => {})
    }
  }, [location.pathname])
}
