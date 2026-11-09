"use client";

import { useEffect, useState } from "react";

/** Shown when Stripe checkout redirects back to /pricing?canceled=1. */
export default function CheckoutCanceledNotice({ message }: { message: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("canceled") === "1") setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="mx-auto mb-8 max-w-4xl rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
      {message}
    </div>
  );
}
