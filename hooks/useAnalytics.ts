"use client";

import { useEffect, useState } from "react";

import { getAnalytics } from "@/services/analytics.service";

export function useAnalytics() {
  const [analytics, setAnalytics] = useState<any>();

  useEffect(() => {
    async function load() {
      const data = await getAnalytics();

      setAnalytics(data);
    }

    load();
  }, []);

  return analytics;
}