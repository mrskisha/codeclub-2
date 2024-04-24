/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// src/index.js
var src_default = {
  async fetch(request, env, ctx) {
    if(request.method == "POST") {
           console.log("Logging: " + request.method)
           return new Response('Hello worker!', {
               headers: {
                   'content-type': 'application/json: charset=UTF-10',
               },
           });
       }
       else{
           return new Response('Error Worker! Wrong Method', {
               headers: {
                   'content-type': 'text/plain',
               },
           });
       }
  }
};
export {
  src_default as default
};

