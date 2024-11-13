export async function fetcher({ path, urlParams }: { path: string; urlParams?: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SCHOOL_API_URL}${path}${urlParams ? `?${urlParams}` : ''}`, {
    headers: { 'Access-Control-Allow-Origin': '*' },
  })
  return res.json()
}
