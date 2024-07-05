'use client'

import { trace } from "@opentelemetry/api";

export default function HomePage() {
  const handleTrace = () => {
    console.log("bomba")
    const span = trace.getTracer("front").startSpan("hello")

    setTimeout(() => null, 1000)
    span.end()
  }

  return (
    <>
      <h1>Jesus!</h1>
      <button onClick={handleTrace}>Click Trace</button>
    </> 
  );
}
