import { linkOptions } from "@tanstack/react-router"
import {
  House,
  PlusCircle,
  ClipboardList,
  Users2,
  Tag,
  CreditCard,
  BarChart2,
  Settings,
  ListChecks,
} from "lucide-react"
import { ReactNode } from "react"

export interface MenuItem {
  label: string
  icon?: ReactNode
  path: string
}

export const menuItems = [
  linkOptions({
    title: "Bosh sahifa",
    icon: <House width={20} />,
    to: "/",
    enabled: true,
    items: [],
  }),
  linkOptions({
    title: "Buyurtma qo'shish",
    icon: <PlusCircle width={20} />,
    to: "/order-create",
    enabled: true,
    items: [],
  }),
  linkOptions({
    title: "Buyurtmalar",
    icon: <ClipboardList width={20} />,
    to: "/orders",
    enabled: true,
    items: [],
  }),
  linkOptions({
    title: "Clientlar",
    icon: <Users2 width={20} />,
    to: "/clients",
    enabled: true,
    items: [],
  }),
  linkOptions({
    title: "Mahsulotlar",
    icon: <Tag width={20} />,
    to: "/products",
    enabled: true,
    items: [],
  }),
  linkOptions({
    title: "Kassa",
    icon: <CreditCard width={20} />,
    to: "/checkout",
    enabled: true,
    items: [],
  }),
  linkOptions({
    title: "Hisobotlar",
    icon: <BarChart2 width={20} />,
    to: "/reports",
    enabled: true,
    items: [],
  }),
  linkOptions({
    title: "Sozlamalar",
    icon: <Settings width={20} />,
    to: "/settings",
    enabled: true,
    items: [
      linkOptions({
        title: "Kategoriyalar",
        icon: <ListChecks width={20} />,
        to: "/settings/categories",
        enabled: true,
        items: [],
      }),
    ],
  }),
]
