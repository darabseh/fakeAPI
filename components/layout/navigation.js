import Link from 'next/link'
function Navigation() {
    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <Link href="/posts/cat/world"><a className="p-2 text-muted">World</a></Link>
                <Link href="/posts/cat/u.s"><a className="p-2 text-muted" >U.S.</a></Link>
                <Link href="/posts/cat/technology"><a className="p-2 text-muted" >Technology</a></Link>
                <Link href="/posts/cat/design"><a className="p-2 text-muted">Design</a></Link>
                <Link href="/posts/cat/culture"><a className="p-2 text-muted">Culture</a></Link>

            </nav>
        </div>
    )
}

export default Navigation