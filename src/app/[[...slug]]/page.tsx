import { ClientOnly } from './client';

export function generateStaticParams() {
  return [{ slug: ['/page/1'] }];
}

export default function Page() {
  return <ClientOnly />; // We'll update this
}
