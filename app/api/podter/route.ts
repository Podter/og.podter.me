import { ImageResponse } from "next/server";
import Podter from "./og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const date = searchParams.get("date");

  const switzerRegular = await fetch(
    new URL("./switzer-regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const switzerBold = await fetch(
    new URL("./switzer-bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(Podter({ title, date }), {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Switzer",
        data: switzerRegular,
        style: "normal",
        weight: 400,
      },
      {
        name: "Switzer",
        data: switzerBold,
        style: "normal",
        weight: 700,
      },
    ],
  });
}
