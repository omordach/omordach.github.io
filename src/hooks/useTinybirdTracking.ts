import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
    const payload = JSON.stringify({
      timestamp: new Date().toISOString(),
      pathname: location.pathname,
      referrer: document.referrer,
      session_id: getSessionId(),
    })

    const url = '/api/track'

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([payload], { type: 'application/json' }))
    } else {
      fetch(url, {
        method: 'POST',
        body: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(() => {})
    }
  }, [location.pathname])
}
