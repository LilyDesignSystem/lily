import Link from "next/link";
import { components } from "@/app/data/components";

export default function ComponentsPage() {
    return (
        <main className="page-wrapper">
            <h1>Components</h1>
            <p>284 headless components</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                {components.map((c) => (
                    <article key={c.slug} className="card" style={{ padding: "var(--nhs-space-4)" }}>
                        <h3><Link href={`/components/${c.slug}`}>{c.name}</Link></h3>
                        <p>{c.description}</p>
                    </article>
                ))}
            </div>
        </main>
    );
}
