import Link from "next/link";

export default function Home() {
  return (
    <main className="align-middle">
      <h1>Zaq Reynolds</h1>
      <Link href="/coding" className="m-10">
        Coding
      </Link>
      <Link href="/audio" className="m-10">
        Audio
      </Link>
      <Link href="/culinary" className="m-10">
        Culinary
      </Link>
    </main>
  );
}
