import React from 'react';
import Link from 'next/link';

export default function users() {
    return <div>
        <ul>
            <li><Link href="/(pages)/[name]/1">Home</Link></li>
            <li><Link href="/(pages)/[name]/2">About</Link></li>
            <li><Link href="/(pages)/[name]/3">Contact</Link></li>
            <li><Link href="/(pages)/[name]/4">Career</Link></li>
        </ul>
    </div>
}