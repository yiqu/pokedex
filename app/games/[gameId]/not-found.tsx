import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div>
      <h4>Selected game version not found.</h4>
      <Link href="/games">Return back to versions</Link>
    </div>
  );
}