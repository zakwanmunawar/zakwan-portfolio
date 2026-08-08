import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Zakwan M. | Computer Vision Engineer",
  description:
    "Portfolio of Mohammed Zakwan M. — Computer Vision Engineer in training focused on real-time AI, object detection, YOLO architectures, and computer vision systems.",
  keywords: [
    "Mohammed Zakwan M",
    "Computer Vision Engineer",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "YOLO",
    "YOLOv1",
    "YOLOv8",
    "YOLO26",
    "PyTorch",
    "OpenCV",
    "ByteTrack",
  ],
  authors: [
    {
      name: "Mohammed Zakwan M.",
    },
  ],
  creator: "Mohammed Zakwan M.",
  openGraph: {
    title: "Mohammed Zakwan M. | Computer Vision Engineer",
    description:
      "Computer Vision Engineer in training building real-time AI and object detection systems.",
    type: "website",
    siteName: "Mohammed Zakwan M. — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Zakwan M. | Computer Vision Engineer",
    description:
      "Computer Vision Engineer in training building real-time AI and object detection systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}