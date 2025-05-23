import PageLayout from '@/layouts/page-layout'
import ProductsMain from '@/pages/products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/products')({
  component: () => (
        <PageLayout>

        <ProductsMain></ProductsMain>
        </PageLayout>
    ),
})
