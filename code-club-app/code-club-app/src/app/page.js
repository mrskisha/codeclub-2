
export let runtime = 'edge'

export async function GET(request) {
  let getRequest = (request) => request.method === "GET";
  let kishaChoices = {
                        1: "Kisha's random choice",
                        2: "Kisha's second random choice",
                        3: "Kisha's third random choice",
                        4: "Kisha's fourth random choice"
        };

  let max = 4;
  let randomResponse = (kishaChoices, max) => {
    let responseInteger = Math.ceil(Math.random() * max);
    return kishaChoices[responseInteger];
  };
                
  let response = getRequest ? 'Generated Random Number: ${randomResponse(kishaChoices, max)}' : "use GET";

  return new Response(response);
}

