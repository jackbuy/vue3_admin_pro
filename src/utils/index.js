import _config from './config'
import _message from './message'
import _storage from './storage'
import _http from './http'
import _tools from './tools'

export const getApiUrl = _tools.getApiUrl
export const http = _http
export const message = _message.message
export const storage = _storage
export const clientId = _config.clientId
export const realm = _config.realm
export const ipConfig = _config.ipConfig
