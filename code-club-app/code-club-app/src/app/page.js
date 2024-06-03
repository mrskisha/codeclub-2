

import { getRequestContext } from '@cloudflare/next-on-pages'

export let runtime = 'edge'

export async function GET(request) {
  let kishaChoices = {
    1: "Kisha's random choice",
    2: "Kisha's second random choice",
    3: "Kisha's third random choice",
    4: "Kisha's fourth random choice"
  };

  let max = 4;
  let responseInteger = Math.floor(Math.random() * max);
  let responseMsg = kishaChoices[responseInteger];                
  
  return new Response(responseMsg);
}

