import { ImageResponse } from "next/server";
import Podter from "./podter";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(Podter(), {
    width: 1200,
    height: 630,
  });
}
