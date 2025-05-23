import PageLayout from "@/layouts/page-layout"
import DashboardMain from "@/pages/dashboard"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_main/")({
    component: () => (
        <PageLayout>
            <DashboardMain />
        </PageLayout>
    ),
})
