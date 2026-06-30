"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function createExperience(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const period = formData.get("period") as string;
  const category = formData.get("category") as string;
  const isCurrent = formData.get("isCurrent") === "on";

  await prisma.experience.create({
    data: {
      title,
      description,
      period,
      category,
      isCurrent,
    },
  });

  revalidatePath("/admin/parcours");
  revalidatePath("/parcours");
  redirect("/admin/parcours");
}

export async function deleteExperience(id: string) {
  await prisma.experience.delete({
    where: { id },
  });
  revalidatePath("/admin/parcours");
  revalidatePath("/parcours");
}
