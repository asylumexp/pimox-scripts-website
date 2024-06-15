"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function LandingPage() {
  return (
    <div className="flex justify-center">
      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-grid-black/[0.1] dark:bg-grid-white/[0.1]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <div className="flex animate-fade-up flex-col items-center justify-center">
          <Image src="/logo.png" alt="proxmox" width={150} height={150} />
          <h1 className="relative z-20 bg-gradient-to-b from-[#0080C4] to-[#004c75] bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-5xl text-center sm:text-left">
            Proxmox arm64 Install Scripts
          </h1>
          <p className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-xl text-center sm:text-left">
            An Unofficial Port of tteck&#39;s Helper-Scripts to arm64
          </p>
          <div className="flex gap-2 py-4">
            <Button asChild variant={"secondary"}>
              <Link href="/scripts">Browse Scripts</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
