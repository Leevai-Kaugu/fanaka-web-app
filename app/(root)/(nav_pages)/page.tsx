import React from 'react';
import Link from 'next/link';

export default function pages() {
    return <div>
        <ul>
            <li><Link href="/(pages)/[name]">Home</Link></li>
            <li><Link href="/(pages)/[name]">Partners</Link></li>
            <li><Link href="/(pages)/[name]">About</Link></li>
            <li><Link href="/(pages)/[name]">Contact</Link></li>
            <li><Link href="/(pages)/[name]">Career</Link></li>
        </ul>
    </div>
}