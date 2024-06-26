import styled from "styled-components";
import {formatCurrency} from "../../utils/helpers"
import {createEditCabin, deleteCabin} from "../../services/apiCabins"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from 'react-hot-toast';
import { useState } from "react";
import CreateCabinFormV1 from './CreateCabinFormV1'
import { useDeleteCabins } from "./useDeleteCabins";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";



const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({cabin}) {
  const[showForm , setShowForm] = useState(false)
  const {isDeleting , deleteCabin} = useDeleteCabins()
  const {isAddingCabin , createCabin} = useCreateCabin()
  
  const {id: cabinId,image , name , maxCapacity , discount , regularPrice:price , description } = cabin

  function handleCreateDuplicate(){
    createCabin({
      name:`Copy of ${name}`,
      image , name , maxCapacity , discount ,price , description
    })
  }
  
 

  // deleteCabin

  return (
    <>
    <TableRow role='row'>
      <Img src={cabin.image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity}</div>
      <Price>{formatCurrency(price)}</Price>

      {discount ? <Discount>{formatCurrency(discount)}</Discount> : <span>-</span>}

      <div>
        <button onClick={()=>handleCreateDuplicate()}><HiSquare2Stack></HiSquare2Stack></button>
        <button onClick={()=>setShowForm(s=>!s)}><HiPencil></HiPencil></button>
      <button onClick={()=>deleteCabin(cabinId)} disabled={isDeleting}><HiTrash></HiTrash></button>
      </div>
    </TableRow>
    {showForm && <CreateCabinFormV1 cabinToEdit={cabin}/>}
    </>
  )
}

export default CabinRow
