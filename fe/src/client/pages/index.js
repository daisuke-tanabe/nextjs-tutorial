import Link from 'next/link'

export default () => (
  <div>
    <h1>Hello, this is the homepage</h1>
    <p>I'm only 0.59 KB after gzipped.</p>
    <Link href='/cowsay'><a>Cowsay</a></Link>
  </div>
);
