import { Head } from 'vite-react-ssg/single-page';
import { resume } from '@/data/resume';
import { personJsonLd } from '@/lib/json-ld';

const { name, title, description } = resume.profile;
const pageTitle = `${name} | ${title}`;

export function Seo() {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
    </Head>
  );
}
