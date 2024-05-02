'use client';

import { useRouter } from "next/navigation";

import Dialog from "@mui/material/Dialog";

export default function DialogWrapper({open = true, children}: {open?: boolean; children: React.ReactNode}) {
  const router = useRouter();

  const handleOnDialogClose= (e: any, reason: 'backdropClick' | 'escapeKeyDown') => {
    router.back();
  };


  return (
    <Dialog open={ open } onClose={ handleOnDialogClose }>
      { children }
    </Dialog>
  );
}