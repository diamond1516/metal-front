import PageLayout from '@/layouts/page-layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/products')({
  component: () => (
        <PageLayout>

        <div>
            Hello Word
        </div>
        </PageLayout>
    ),
})
