"use client"

import { FunctionTest } from "./_expressions"

export function ClientBind() {
    return <h1>{FunctionTest()}</h1>
}