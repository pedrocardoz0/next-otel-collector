'use client'

import { trace } from "@opentelemetry/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const handleTrace = () => {
    console.log("bomba")
    const span = trace.getTracer("front").startSpan("hello")

    setTimeout(() => null, 1000)
    span.end()
  }
  
  const [data, setData] = useState([]);
  const [pipoca, setPipoca] = useState([]);
  const [pipocaPOST, setPipocaPost] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setData(data));

      fetch("/api/pipoca")
      .then((response) => response.json())
      .then((data) => setPipoca(data));

      fetch("/api/pipoca", {
        method: "POST"
      }).then((response) => response.json())
      .then((data) => setPipocaPost(data));

  }, [])

  return (
    <>
      <h1>Jesus!</h1>
      <button onClick={handleTrace}>Click Trace</button>
      <Link href={"/blog"}>Hey</Link>
      {console.log(data)}
      {console.log(pipoca)}
      {console.log(pipocaPOST)}
    </> 
  );
}
