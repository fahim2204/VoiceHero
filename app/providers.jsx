// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function Providers({ children }) {
    return (
        <NextUIProvider>
            <ProgressBar
                height="3px"
                color="#ff7251"
                options={{ showSpinner: true }}
                shallowRouting
            />
            {children}
        </NextUIProvider>
    )
}