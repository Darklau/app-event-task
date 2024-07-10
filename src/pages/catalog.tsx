import {useProductStore} from "@/store/productStore";
import {useLoadingStore} from "@/store/loadingStore";
import {PreLoader} from "@/components/ui/preLoader";

export const Catalog = () => {
    const {products} = useProductStore()
    const {loading} = useLoadingStore()
    return <div>
        {loading ? <PreLoader/> : JSON.stringify(products)}

    </div>
}