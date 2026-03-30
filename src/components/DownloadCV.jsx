import React from "react"
import { AnimatedBorderButton } from "./animatedBorderButton"
import { Download } from "lucide-react";

export default function DownloadCV() {
    return (
        <a href="/CV.pdf" download>
            <AnimatedBorderButton>
                <Download  className="w-5 h-5" />
                Download CV
            </AnimatedBorderButton>
        </a>
    );
}