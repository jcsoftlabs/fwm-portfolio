"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function createArticle(formData: FormData) {
  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const category = formData.get("category") as string;
  const contentString = formData.get("content") as string; // We'll split by newline
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  
  const content = contentString.split("\n").filter((p) => p.trim() !== "");

  await prisma.newsArticle.create({
    data: {
      title,
      slug,
      excerpt,
      category,
      content,
      date: new Date(),
      published: true,
    },
  });

  revalidatePath("/admin/actualites");
  revalidatePath("/actualites");
  redirect("/admin/actualites");
}

export async function deleteArticle(id: string) {
  await prisma.newsArticle.delete({
    where: { id },
  });
  revalidatePath("/admin/actualites");
  revalidatePath("/actualites");
}
