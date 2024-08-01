"use client";

import { Suspense, use, useEffect, useState } from "react";

export const PastPromises = () => {
  const [version, setVersion] = useState(null);
  useEffect(() => {
    fetch("/api.json")
      .then((res) => res.json())
      .then((data) => data.version)
      .then((version) => setVersion(version));
  }, []);
};
