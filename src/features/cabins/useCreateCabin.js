import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";



export default function useCreateCabin(){
    const queryClient = useQueryClient();
    const { isLoading: isAddingCabin, mutate:createCabin } = useMutation({
      mutationFn: createEditCabin,
      onSuccess: () => {
        toast.success("added a new cabin");
        queryClient.invalidateQueries({
          queryKey: ["cabin"],
        });
        // reset();
      },
      onError: (err) => toast.error(err.message),
    });

    return {createCabin , isAddingCabin}
}