import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/reports')({
  component: () => <div>Hello /_main/reports!</div>,
})
