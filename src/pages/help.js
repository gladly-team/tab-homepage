import { externalHelpURL } from 'src/utils/navigation'

// A client-side redirect as an FYI that this path is in use,
// but this redirect should be handled by the server.
export default () => {
  if (typeof window !== 'undefined') {
    window.document.location.replace(externalHelpURL)
  }
  return null
}
