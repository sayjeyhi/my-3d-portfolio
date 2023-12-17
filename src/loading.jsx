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
