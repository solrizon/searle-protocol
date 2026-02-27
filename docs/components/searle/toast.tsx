interface ToastProps {
  show: boolean
  message?: string
}

export function Toast({ show, message = "LICENSE COPIED TO CLIPBOARD" }: ToastProps) {
  return (
    <div
      className="fixed bottom-8 right-8 px-6 py-3 font-mono text-sm font-bold z-40 transition-transform duration-300 flex items-center gap-2"
      style={{
        backgroundColor: "#FFFFFF",
        color: "#000000",
        transform: show ? "translateY(0)" : "translateY(6rem)",
      }}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      {message}
    </div>
  )
}
