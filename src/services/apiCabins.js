import supabase from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("");
  }
  return cabins;
}

export async function deleteCabin(id) {
  const { data , error } = await supabase

    .from("cabins")
    .delete()
    .eq('id', id);

    if(error){
      throw new Error('Cannot delete the Cabin')

    }

    return data;
}
