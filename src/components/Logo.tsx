import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="/logo.png"
        alt="Strategii Urbane"
        width={56}
        height={56}
        priority
      />

      <div className="leading-none">
        <div className="text-[12px] tracking-[0.45em] text-zinc-900">
          STRATEGII
        </div>

        <div className="mt-2 text-[12px] tracking-[0.45em] text-zinc-900">
          URBANE
        </div>
      </div>
    </Link>
  );
}