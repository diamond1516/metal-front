import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/clients')({
  component: () => <div>Hello /_main/clients!</div>,
})
