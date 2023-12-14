import { NavLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';
import AuthProviders from './AuthProviders';

const Navbar = () => {
    const session = true;
    return (
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <img
                        src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/10/roadtonarutopv_screenshot.png?resize=696%2C392&ssl=1"
                        alt=""
                        style={{ width: 100, height: 60 }}
                    />
                </Link>
                <div className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.text}>
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flexCenter gap-4">
                {session ? (
                    <>
                        Ussr
                        <Link href="/create-project">
                            <button title="Share work" />
                        </Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </nav>
    );
};
export default Navbar;
