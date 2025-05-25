import FormInput from "@/components/form/input"
import { NumberInput } from "@/components/ui/number-input"
import { FormSelect } from "@/components/form/select"
import { usePost } from "@/hooks/usePost"
import { useForm } from "react-hook-form"

type Form = {
    size: number
    client: number
    product: number
}

const CreateOrderForm = () => {
    const { error, mutate, isError, isPending } = usePost({
        onSuccess: (data) => {},
    })

    const form = useForm<Form>({
        disabled: isPending,
    })

    function onSubmit() {}
    return (
        <form onSubmit={onSubmit}>
            <FormSelect
                label="Mahsulot"
                name="product"
                options={[{ label: "Shirinchoy", value: 1 }]}
                control={form.control}
            />
            <NumberInput label="Xajmi" name="size" autoComplete="on" />
        </form>
    )
}

export default CreateOrderForm
