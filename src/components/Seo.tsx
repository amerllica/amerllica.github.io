import { Head } from 'vite-react-ssg/single-page';
import { personJsonLd } from '@/lib/json-ld';

export function Seo() {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
    </Head>
  );
}
