'use client';
import React from 'react'
import { useEffect } from 'react'

export default function Workbox() {
    useEffect(() => {
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker
            .register("/service-worker.js")
            .then((registration) => {
              console.log(
                "Service Worker registered with scope:",
                registration.scope,
              );
            })
            .catch((error) => {
              console.error("Service Worker registration failed:", error);
            });
        });
      }
    }, []);
  return (
    <div>
      
    </div>
  )
}
