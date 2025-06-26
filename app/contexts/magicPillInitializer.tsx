"use client"
import { MagicPill } from "magic-pill";
import { useMagicPill } from "./magicPill";

export const MagicPillInitializer = () => {
  const { pillData } = useMagicPill();

  return (
   <MagicPill pillData={pillData}/>
  )
};