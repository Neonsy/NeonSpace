import { ConvexQueryClient } from '@convex-dev/react-query'
import { ConvexProvider } from 'convex/react'

const CONVEX_URL = (import.meta as any).env.VITE_CONVEX_URL

// Create client only if URL is configured
const convexQueryClient = CONVEX_URL ? new ConvexQueryClient(CONVEX_URL) : null

export default function AppConvexProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // If Convex is not configured, just render children without the provider
  if (!convexQueryClient) {
    return <>{children}</>
  }

  return (
    <ConvexProvider client={convexQueryClient.convexClient}>
      {children}
    </ConvexProvider>
  )
}
