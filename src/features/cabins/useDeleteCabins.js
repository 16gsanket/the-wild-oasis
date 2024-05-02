import toast from "react-hot-toast"
import { deleteCabin as deleteCabinAPI } from "../../services/apiCabins"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useDeleteCabins(){
    const queryClient = useQueryClient()

    const {isLoading:isDeleting ,  mutate:deleteCabin } = useMutation({
        mutationFn: deleteCabinAPI,
        onSuccess : () => {
          toast.success('successfully deleted a cabin!')

          queryClient.invalidateQueries({
            queryKey:['cabin']
          })
        },
        onError:(err)=>toast.error(err.message)
    });

    return {isDeleting , deleteCabin}
}

