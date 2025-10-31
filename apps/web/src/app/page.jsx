import React from "react";
import { redirect } from "react-router";

export function loader() {
  return redirect("/dashboard");
}

export default function HomePage() {
  return null;
}
