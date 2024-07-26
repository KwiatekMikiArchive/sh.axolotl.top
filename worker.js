addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const userAgent = request.headers.get('User-Agent')
  
  if (userAgent.startsWith('curl/')) {
    const randomNumber = Math.floor(Math.random() * filesCount) + 1
    const response = await fetch(`https://raw.githubusercontent.com/legitna/axolotls/main/${randomNumber}.txt`)
    return new Response(await response.text(), { status: response.status })
  }
  
  return new Response("go use <code>curl sh.axolotl.top</code> in ur cmd", {
    headers: { 'Content-Type': 'text/html' },
  })
}

const filesCount = 10;
