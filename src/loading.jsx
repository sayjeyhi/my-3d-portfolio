import { useState, useEffect } from 'react'

function useDeviceType() {
  const [deviceType, setDeviceType] = useState('desktop')

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera

    if (/android/i.test(userAgent)) {
      setDeviceType('mobile')
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setDeviceType('mobile')
    } else {
      setDeviceType('desktop')
    }
  }, [])

  return deviceType
}

export default useDeviceType

export function Loading() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="loader">
        <div className="box"></div>
        <div className="shadow"></div>
      </div>
      <p style={{ fontFamily: "'Inter', tahoma, arial, serif" }}>Loading...</p>
    </div>
  )
}
