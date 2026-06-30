"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function createAchievement(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const period = formData.get("period") as string;
  const domain = formData.get("domain") as string;
  const status = formData.get("status") as string;
  const needsVerification = formData.get("needsVerification") === "on";

  await prisma.achievement.create({
    data: {
      title,
      description,
      period,
      domain,
      status,
      needsVerification,
    },
  });

  revalidatePath("/admin/realisations");
  revalidatePath("/realisations");
  redirect("/admin/realisations");
}

export async function deleteAchievement(id: string) {
  await prisma.achievement.delete({
    where: { id },
  });
  revalidatePath("/admin/realisations");
  revalidatePath("/realisations");
}
