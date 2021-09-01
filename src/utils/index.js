import * as _config from './config'
import * as _message from './message'
import * as _tools from './tools'
import _storage from './storage'
import _http from './http'

export const getApiUrl = _tools.getApiUrl
export const http = _http
export const storage = _storage
export const message = _message.message
export const clientId = _config.clientId
export const realm = _config.realm
export const ipConfig = _config.ipConfig
