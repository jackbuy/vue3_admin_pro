import * as _config from './config'
import * as _message from './message'
import * as _tools from './tools'
import _storage from './storage'
import _http from './http'

export const clientId = _config.clientId
export const realm = _config.realm
export const ipConfig = _config.ipConfig

export const http = _http

export const storage = new _storage(_config.storageType)

export const message = _message.message
export const messageBox = _message.messageBox

export const getApiUrl = _tools.getApiUrl
export const toLogin = _tools.toLogin
