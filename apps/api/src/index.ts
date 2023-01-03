import { URL } from 'url'

import server from '@/server'
import { serverRunningTemplate } from '@/utils/console'

const { API_URL = '' } = process.env

const url = new URL(API_URL)
const host = url.hostname
const port = parseInt(url.port, 10)

server
  .listen({ host, port })
  .then(() => console.log(serverRunningTemplate(host, port)))
  .catch((error) => console.error(error))
