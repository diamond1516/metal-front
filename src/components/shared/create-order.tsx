import { ReactNode } from "react"
import { Button } from "../ui/button"


type Props = {
    children?: ReactNode
}


const CreateOrder = ({children = "+ Buyurtma"}: Props) => {
    return <Button>{children}</Button>
}

export default CreateOrder
