"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function createAlbum(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const file = formData.get("coverImage") as File;
  
  let coverImageUrl = null;

  if (file && file.size > 0) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    try {
      const uploadResult: any = await uploadToCloudinary(buffer, "fwm_portfolio/albums");
      coverImageUrl = uploadResult.secure_url;
    } catch (error) {
      console.error("Cloudinary upload failed:", error);
    }
  }

  await prisma.album.create({
    data: {
      title,
      description,
      coverImage: coverImageUrl,
    },
  });

  revalidatePath("/admin/galerie");
  revalidatePath("/medias");
  redirect("/admin/galerie");
}

export async function uploadPhotoToAlbum(formData: FormData) {
  const albumId = formData.get("albumId") as string;
  const file = formData.get("photo") as File;

  if (!file || file.size === 0) return;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    const uploadResult: any = await uploadToCloudinary(buffer, `fwm_portfolio/albums/${albumId}`);
    
    await prisma.photo.create({
      data: {
        albumId,
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
        title: file.name,
      },
    });

    revalidatePath(`/admin/galerie/${albumId}`);
    revalidatePath("/medias");
  } catch (error) {
    console.error("Photo upload failed:", error);
  }
}
