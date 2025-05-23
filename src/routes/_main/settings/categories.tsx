import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/settings/categories')({
  component: () => <div>Hello /_main/settings/categories!</div>,
})
