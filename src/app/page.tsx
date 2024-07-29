'use client'

import { trace } from "@opentelemetry/api";
import { useEffect, useState } from "react";

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import outputs from "@/amplify_outputs.json";
import { Amplify } from 'aws-amplify';

Amplify.configure(outputs);

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
    <Authenticator>
      {({ signOut }) => (
        <main>
          <button onClick={signOut}>Sign Out</button>
        </main>
      )}
    </Authenticator>
  );
}
