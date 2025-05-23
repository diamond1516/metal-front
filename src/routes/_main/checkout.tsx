import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/checkout')({
  component: () => <div>Hello /_main/checkout!</div>,
})
