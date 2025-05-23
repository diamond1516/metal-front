import PageLayout from '@/layouts/page-layout'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/settings/')({
  loader: async () => {
    throw redirect({ to: '/settings/categories' })
  },
  component: () => (
    <PageLayout>
      <div>Redirecting to categories…</div>
    </PageLayout>
  ),
})
