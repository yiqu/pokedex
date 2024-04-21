import startCase from 'lodash/startCase';
import type { Metadata, ResolvingMetadata } from 'next';
import type { PageProps } from '@/shared/models/page.models';

export async function generateMetadata(
  { params, searchParams }: PageProps<{ pokemonId: string }>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const pokemonName = params.pokemonId;

  // // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${startCase(pokemonName)} | Pokemon | Pokdex`,
    openGraph: {
      images: [],
      title: `${startCase(pokemonName)} | Pokemon | Pokdex`,
    },
  };
}

export default function PokemonDetails() {
  return <div>Deets</div>;
}
