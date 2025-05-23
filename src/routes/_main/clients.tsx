import PageLayout from '@/layouts/page-layout'
import ClientsMain from '@/pages/clients'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/clients')({
  component: () => (
        <PageLayout>

        <ClientsMain></ClientsMain>
        </PageLayout>
    ),
})
