import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins(){

    const {error , data:cabins , isLoading} = useQuery({
        queryKey:['cabin'],
        queryFn:getCabins
      });

      return {isLoading , error , cabins}
}