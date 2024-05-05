import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRowRefactored from "../../ui/FormRowRefactored";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

function UpdateSettingsForm() {
  const {
    settings: { minBookingLength, maxBookingLength , maxGuestsPerBooking , breakFastPrice } = {},
    isLoading,
    error,
  } = useSettings();

  const {register , reset , handleSubmit} = useForm()
  const queryClient = useQueryClient()


  if (isLoading == false) {
    console.log(minBookingLength, maxBookingLength);
  }

  const{isLoading : isUpdatingSettings , mutate:changeSetting} = useMutation({
    mutationFn:updateSetting,
    onSuccess:()=>{
      toast.success("Settings updated successfully");
      queryClient.invalidateQueries({
        queryKey:['settings']
      })
    },
    onError: (err)=>toast.error('err.message')
  })

  
  


   function onsubmit(data){
    
    
    const newData = {minBookingLength: data.minnights , maxBookingLength : data.maxnights, maxGuestsPerBooking : data.maxguests , breakFastPrice : data.breakfastprice}
      changeSetting(newData);
      
   }


  if(isLoading || isUpdatingSettings) return <Spinner/>
  return (
    <Form onSubmit={handleSubmit(onsubmit)}>
      <FormRowRefactored label="Minimum nights/booking" >
        <Input type="number" id="minnights" defaultValue={minBookingLength} {...register('minnights') }/>
      </FormRowRefactored>
      <FormRowRefactored label="Maximum nights/booking">
        <Input type="number" id="maxnights" defaultValue={maxBookingLength} {...register('maxnights') }/>
      </FormRowRefactored>
      <FormRowRefactored label="Maximum guests/booking">
        <Input type="number" id="maxguests" defaultValue={maxGuestsPerBooking} {...register('maxguests') }/>
      </FormRowRefactored>
      <FormRowRefactored label="Breakfast price">
        <Input type="number" id="breakfastprice" defaultValue={breakFastPrice} {...register('breakfastprice') } />
      </FormRowRefactored>
      <button type="submit">Submit</button>
    </Form>
  );
}

export default UpdateSettingsForm;
