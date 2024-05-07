'use server';

import { revalidateTag, revalidatePath } from "next/cache";

export async function triggerRevalidateByPath(path?: string) {
  if (path) {
    revalidatePath(path);
  } else {
    revalidatePath('/');
  }
}

export async function triggerRevalidateByTags(tag: string) {
  revalidateTag(tag);
}