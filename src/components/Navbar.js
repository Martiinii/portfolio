import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";

const Navbar = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const toggleVisibility = (state = null) => {
        setMobileMenuVisible(state ?? !mobileMenuVisible);
    }

    const links = [
        { href: '/#about', value: 'About' },
        { href: '/#skills', value: 'Skills' },
        { href: '/#work', value: 'My work' },
    ];

    const [style, setStyle] = useState("");

    useScrollPosition(({ prevPos, currPos }) => {
        const isVisible = currPos.y > prevPos.y;

        const newStyle = isVisible
            ? ""
            : "-translate-y-full md:translate-y-0";

            if(newStyle == style) return;
            setStyle(newStyle);
    });

    return (
        <nav
            className={`navbar ${style}`}
        >
            <div
                className="container text-slate-600 flex flex-wrap md:flex-col md:min-h-full md:gap-12 justify-between items-center mx-auto sm:text-xl"
            >
                <Logo />
                <button
                    className="btn md:hidden p-3 focus:ring-gray-300 hover:bg-slate-100 flex shadow-none"
                    onClick={() => { toggleVisibility() }}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <NavContainer visibility={mobileMenuVisible}>
                    {links.map(link => <NavItem {...link} key={link.value} onClick={() => { toggleVisibility(false) }} />)}
                </NavContainer>
            </div>
        </nav>
    )
}

const Logo = () => {
    return (
        <a
            className="rounded-full shadow-zinc-500 shadow-md overflow-hidden flex w-20"
            href="/#"
        >
            <img
                src="/logo.png"
                alt="Logo"
            />
        </a>
    );
}

const NavContainer = ({ children, visibility }) => {
    return (
        <div className={`${!visibility ? 'hidden' : ''} w-full md:flex md:w-auto md:grow`}>
            <ul
                className="flex flex-col gap-2 mt-4 md:gap-16 md:mt-0 md:justify-center md:items-center md:text-center font-medium uppercase"
            >
                {children}
            </ul>
        </div>
    )
}

const NavItem = ({ href, value, onClick }) => {
    return (
        <li>
            <a
                className="btn shadow-none block py-2 px-4 text-slate-600 bg-transparent md:p-3 font-bold focus:ring-sky-600 hover:bg-slate-100"
                href={href}
                onClick={onClick}
            >
                {value}
            </a>
        </li>
    )
}

export default Navbar;