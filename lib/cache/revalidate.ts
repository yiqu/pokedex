'use server';

import { revalidatePath } from "next/cache";

export async function revalidateByPath(path?: string) {
  if (path) {
    revalidatePath(path);
  } else {
    revalidatePath('/');
  }
}