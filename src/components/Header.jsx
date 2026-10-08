import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="font-[Inter,system-ui,-apple-system,sans-serif] text-[#12345b]">

            {/* TOP BAR */}
            <div className="flex items-center justify-between border-b-2 border-[#1769aa] bg-white px-5 py-4 sm:px-8 lg:px-20">

                {/* BRAND */}
                <div className="text-xl font-extrabold tracking-[-0.03em]">
                    SecureForms
                </div>

                {/* DESKTOP NAVIGATION */}
                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-6 md:flex"
                >
                    <a
                        href="#features"
                        className="text-sm font-bold text-[#1769aa] no-underline transition hover:text-[#12345b]"
                    >
                        Features
                    </a>

                    <a
                        href="#security"
                        className="text-sm font-bold text-[#1769aa] no-underline transition hover:text-[#12345b]"
                    >
                        Security
                    </a>

                    <a
                        href="#contact"
                        className="text-sm font-bold text-[#1769aa] no-underline transition hover:text-[#12345b]"
                    >
                        Contact
                    </a>
                </nav>

                {/* HAMBURGER BUTTON */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1769aa] hover:bg-gray-100 md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        /* X icon */
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        /* Hamburger icon */
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* MOBILE NAVIGATION */}
            {menuOpen && (
                <nav
                    aria-label="Mobile navigation"
                    className="border-b-2 border-[#1769aa] bg-white px-5 py-4 md:hidden"
                >
                    <div className="flex flex-col gap-1">
                        <a
                            href="#features"
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-4 py-3 text-sm font-bold text-[#1769aa] hover:bg-gray-100"
                        >
                            Features
                        </a>

                        <a
                            href="#security"
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-4 py-3 text-sm font-bold text-[#1769aa] hover:bg-gray-100"
                        >
                            Security
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-4 py-3 text-sm font-bold text-[#1769aa] hover:bg-gray-100"
                        >
                            Contact
                        </a>
                    </div>
                </nav>
            )}

            {/* HERO */}
            <section className="relative min-h-[clamp(24rem,65vh,38rem)] overflow-hidden bg-[linear-gradient(115deg,#e6b84a_0%,#f8df91_30%,#ffffff_78%)]">

                {/* TOP LINE */}
                <div className="absolute left-[8%] top-10 h-0.5 w-[84%] bg-[#1769aa] opacity-80" />

                {/* HERO CONTENT */}
                <div className="mx-auto max-w-3xl px-6 py-[clamp(5rem,12vw,9rem)] text-center">

                    <p className="mb-4 text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-[#1769aa]">
                        Simple. Secure. Seamless.
                    </p>

                    <h1 className="m-0 text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.06em] text-[#12345b]">
                        Forms built for trust.
                    </h1>

                    <p className="mx-auto mb-8 mt-6 max-w-[34rem] text-[1.1rem] leading-[1.6] text-[#315477]">
                        Collect information confidently with secure, effortless
                        forms that keep every response protected.
                    </p>

                    <a
                        href="#get-started"
                        className="inline-block rounded-full border-2 border-[#0e4d81] bg-[#1769aa] px-6 py-3.5 font-bold text-white no-underline transition hover:bg-[#12345b]"
                    >
                        Get started
                    </a>
                </div>

                {/* BOTTOM LINE */}
                <div className="absolute bottom-10 left-[18%] h-0.5 w-[64%] bg-[#1769aa] opacity-65" />

            </section>
        </header>
    );
};

export default Header;