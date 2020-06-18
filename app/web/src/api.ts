const url =
  "https://lagerhaus-g.langtec.de/lagerhaus-g/api/generate/memorial/generated.json"

export interface Options {
  intro: "erinnern" | "verachten" | "bereuen" | "betrauern" | "beschweigen"
  volume: "still" | "mittel" | "laut" | "ganz laut"
  tone: "mahnen" | "ehren" | "gedenken"
}

export function get(params: Options) {
  return fetch(url, {
    method: "POST",
    headers: {
      "x-APIKey": "7179e429611642d6bdf90f7c570dd110",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(params),
    body: JSON.stringify({
      intro: "erinnern",
      volume: "still",
      tone: "mahnen",
    }),
  })
}

type Response = { ok: true; data: any } | { ok: false; error: string }

export async function getText(params: Options): Promise<Response> {
  const response = await get(params)
  if (response.ok) {
    return { ok: true, data: await response.json() }
  } else {
    return { ok: false, error: response.statusText }
  }
}