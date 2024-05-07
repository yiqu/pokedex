
export const swrFetcherDefault = async (tags: string[], url: string) => {
  const res = await fetch(url, { next: { tags: tags } });
  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return await res.json();
};
