"use client";

import { useEffect } from "react";

export default function ConsoleLogger(props) {
  useEffect(() => {
    console.log(props);
  });
}
