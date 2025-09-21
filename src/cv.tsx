import type { ReactNode } from "react";

const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function Experience({
    title,
    location,
    from,
    to,
    children,
    showMonth = false,
}: {
    title: string;
    location?: string;
    from: Date;
    to?: Date;
    children?: ReactNode;
    showMonth?: boolean;
}) {
    return (
        <div>
            <div className="flex items-baseline">
                <div className="font-bold text-lg text-polar-1">{title}</div>
                <div className="ml-auto">
                    {showMonth && `${monthNames[from.getMonth()]} `}
                    {from.getFullYear()}–
                    {to && showMonth && `${monthNames[to.getMonth()]} `}
                    {to?.getFullYear()}
                </div>
            </div>
            {location && <div className="mb-2">{location}</div>}
            <p>{children}</p>
        </div>
    );
}

export function CV() {
    return (
        <div className="flex flex-col font-noto h-screen overflow-hidden text-sm tracking-wide">
            <div className="px-12 py-16 bg-polar-4 text-snow-1">
                <h1 className="text-4xl">Elias Jörgensen</h1>
                <div className="text-xl">Full-stack developer</div>
            </div>
            <div className="p-8 flex divide-x-4 divide-polar-1 grow">
                <div className="p-4 flex flex-col gap-4">
                    <div>
                        <h2 className="text-lg font-bold text-polar-1">
                            Key languages
                        </h2>
                        <ul>
                            <li>Swedish</li>
                            <li>English</li>
                            <li>TypeScript</li>
                            <li>C#</li>
                            <li>C++</li>
                            <li>C</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-polar-1 w-min whitespace-nowrap">
                            Key technologies <br /> & frameworks
                        </h2>
                        <ul>
                            <li>React</li>
                            <li>React Router 7</li>
                            <li>Next.js</li>
                            <li>ASP.NET</li>
                            <li>WebAssembly</li>
                            <li>TailwindCSS</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                            <li>Linux VPSs</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Gitea</li>
                            <li>Docker</li>
                            <li>OpenGL/WebGL</li>
                        </ul>
                    </div>
                    <div className="relative min-w-64 grow">
                        <img
                            src="/portrait.png"
                            alt="A picture of Elias Jörgensen"
                            className="absolute inset-0 h-full object-contain object-bottom"
                        />
                    </div>
                </div>
                <div className="pl-8 grow divide-y-4 divide-polar-1">
                    <div className="py-4 flex flex-col gap-4">
                        <p>
                            Full-stack developer with roughly 7 years of
                            programming experience, including more than 1 year
                            of full-time professional experience. Passionate
                            about programming and computers, especially software
                            architecture and low- level development. Currently
                            looking for new challenges to broaden my skills in
                            software development and architecture.
                        </p>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl border-b-2 border-frost-4 w-max">
                                Professional experience
                            </h2>
                            <ol className="flex flex-col gap-4">
                                <li>
                                    <Experience
                                        title="Full-stack developer"
                                        location="SkyTech AB"
                                        from={new Date("2024-06-13")}
                                        showMonth>
                                        During my time at SkyTech AB, I have
                                        been the primary front-end developer and
                                        worked across the stack for the daughter
                                        company StålDirect. I have rebuilt the
                                        front- end from the ground up with
                                        TypeScript and React, integrating
                                        technologies like WASM and SSR through
                                        React Router 7. I have also bridged the
                                        gap between the ASP.NET backend, C# CAD
                                        engine, and the front-end, and set up a
                                        proper CI/CD pipeline with Gitea,
                                        Docker, and Linux VPSs.
                                    </Experience>
                                </li>
                                <li>
                                    <Experience
                                        title="Freelance web developer"
                                        from={new Date("2022")}
                                        to={new Date("2024")}>
                                        I developed and hosted a handful of
                                        websites for local businesses using
                                        React + Next.js, TailwindCSS, Strapi,
                                        and Hetzner.
                                    </Experience>
                                </li>
                            </ol>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl border-b-2 border-frost-4 w-max">
                                Education
                            </h2>
                            <ol>
                                <li>
                                    <Experience
                                        title="Information & media technology"
                                        location="Rodengymnasiet – Norrtälje"
                                        from={new Date("2021")}
                                        to={new Date("2024")}
                                    />
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="py-4">
                        <h2 className="font-bold text-lg text-polar-1">
                            Contact
                        </h2>
                        <ul>
                            <li>
                                Email:{" "}
                                <a href="mailto:elias.jorgensen2006@gmail.com">
                                    elias.jorgensen2006@gmail.com
                                </a>
                            </li>
                            <li>
                                Phone:{" "}
                                <a
                                    href={`tel:${String(
                                        import.meta.env.VITE_PHONE
                                    ).replace(/\D/g, "")}`}>
                                    {import.meta.env.VITE_PHONE}
                                </a>
                            </li>
                            <li>
                                Website:{" "}
                                <a href="https://eliasjorgensen.se">
                                    eliasjorgensen.se
                                </a>
                            </li>
                            <li>
                                GitHub:{" "}
                                <a href="https://github.com/saile515">
                                    github.com/saile515
                                </a>
                            </li>
                            <li>
                                LinkedIn:{" "}
                                <a href="https://linkedin.com/in/elias-jörgensen-907552292">
                                    linkedin.com/in/elias-jörgensen-907552292
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
