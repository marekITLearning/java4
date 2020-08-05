let config

if (process.env.NODE_ENV === 'production') {
  const wssurl = new URL('/amlwss/wss', window.location.href)
  wssurl.protocol = wssurl.protocol.replace('https', 'wss')
  wssurl.protocol = wssurl.protocol.replace('http', 'ws')
  config = {
    api_url: '/amlrest/api/',
    wss_url: wssurl.href
  }
}

if (process.env.NODE_ENV === 'development') {
  config = {
    api_url: 'http://127.0.0.1:8082/amlrest/api/',
    wss_url: 'ws://127.0.0.1:8081/amlwss/wss'
  }
}

export {
  config
}
