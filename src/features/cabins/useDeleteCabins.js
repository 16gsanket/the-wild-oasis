export default function useDeleteCabins{
    const {isLoading:isDeleting ,  mutate } = useMutation({
        mutationFn: deleteCabin,
        onSuccess : ()=>{
          toast.success('successfully deleted a cabin!')
          queryClient.invalidateQueries({
            queryKey:['cabin']
          })
        },
        onError:(err)=>toast.error(err.message)
    })

}