import PageLayout from '@/layouts/page-layout'
import CheckoutMain from '@/pages/checkout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/checkout')({
  component: () => (
        <PageLayout>

        <CheckoutMain/>
        </PageLayout>
    ),
})
