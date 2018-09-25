import Link from 'next/link'

// only being loaded on `/cowsay`
import cowsay from 'cowsay-browser'

export default () => <div>
  <p>This page costs 29.8 KB after gzipped!</p>
  <pre>
    {cowsay.say({ text: 'I am a big package!' })}
  </pre>
  <Link href='/'><a>Go home</a></Link>
</div>
