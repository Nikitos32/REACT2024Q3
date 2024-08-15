import { permanentRedirect } from 'next/navigation';

export default function IndexPage() {
  permanentRedirect(`/page/1`);
}
