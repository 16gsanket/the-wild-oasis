import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("");
  }

  return cabins;
}

export async function deleteCabin(id) {
  /* https://jjptwhdatzanmnnameit.supabase.co
  /storage/v1/object/public/cabin-images/cabin-001.jpg*/


  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Cannot delete the Cabin");
  }
  return data;
}

export async function createCabin(newCabin) {
  const CabinImageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  //1) inserting new Cabin..

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${CabinImageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    throw new Error("Cannot delete the Cabin");
  }
  //2) Uploading the Image to the Supabase Bucket ...

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(CabinImageName, newCabin.image);

  //3. delete the cabin if there was error uploading corresponding image
  
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError)
    throw new Error("Cabin image could not be upload and cabin is deleted");

  }
}
