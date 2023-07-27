'use strict';

var axios = require('axios');
var reactQuery = require('@tanstack/react-query');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function _get(url, options) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get(url, __assign({}, options))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _post(url, data) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post(url, JSON.stringify(data), {
                        headers: { 'Content-Type': 'application/json' },
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _postMultiPart(url, formData, options) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post(url, formData, __assign(__assign({}, options), { headers: { 'Content-Type': 'multipart/form-data' } }))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _put(url, data) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.put(url, JSON.stringify(data), {
                        headers: { 'Content-Type': 'application/json' },
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _delete(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.delete(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _deleteWithOptions(url, options) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.delete(url, __assign({}, options))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _patch(url, data) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.patch(url, JSON.stringify(data), {
                        headers: { 'Content-Type': 'application/json' },
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
var request = {
    get: _get,
    post: _post,
    postMultiPart: _postMultiPart,
    put: _put,
    delete: _delete,
    deleteWithOptions: _deleteWithOptions,
    patch: _patch,
};

var user = function () {
    return '/api/user';
};
var userPlugins = function () {
    return '/api/user/plugins';
};
var messages = function (id) {
    return "/api/messages/".concat(id);
};
var abortRequest = function (endpoint) {
    return "/api/ask/".concat(endpoint, "/abort");
};
var conversations = function (pageNumber) {
    return "/api/convos?pageNumber=".concat(pageNumber);
};
var conversationById = function (id) {
    return "/api/convos/".concat(id);
};
var updateConversation$1 = function () {
    return '/api/convos/update';
};
var deleteConversation$1 = function () {
    return '/api/convos/clear';
};
var search = function (q, pageNumber) {
    return "/api/search?q=".concat(q, "&pageNumber=").concat(pageNumber);
};
var searchEnabled = function () {
    return '/api/search/enable';
};
var presets = function () {
    return '/api/presets';
};
var deletePreset$1 = function () {
    return '/api/presets/delete';
};
var aiEndpoints = function () {
    return '/api/endpoints';
};
var tokenizer = function () {
    return '/api/tokenizer';
};
var login$1 = function () {
    return '/api/auth/login';
};
var logout$1 = function () {
    return '/api/auth/logout';
};
var register$1 = function () {
    return '/api/auth/register';
};
var loginGoogle = function () {
    return '/api/auth/google';
};
var refreshToken$1 = function () {
    return '/api/auth/refresh';
};
var requestPasswordReset$1 = function () {
    return '/api/auth/requestPasswordReset';
};
var resetPassword$1 = function () {
    return '/api/auth/resetPassword';
};
var plugins = function () {
    return '/api/plugins';
};
var config = function () {
    return '/api/config';
};

function getConversations(pageNumber) {
    return request.get(conversations(pageNumber));
}
function abortRequestWithMessage(endpoint, abortKey, message) {
    return request.post(abortRequest(endpoint), { arg: { abortKey: abortKey, message: message } });
}
function deleteConversation(payload) {
    //todo: this should be a DELETE request
    return request.post(deleteConversation$1(), { arg: payload });
}
function clearAllConversations() {
    return request.post(deleteConversation$1(), { arg: {} });
}
function getMessagesByConvoId(id) {
    return request.get(messages(id));
}
function getConversationById(id) {
    return request.get(conversationById(id));
}
function updateConversation(payload) {
    return request.post(updateConversation$1(), { arg: payload });
}
function getPresets() {
    return request.get(presets());
}
function createPreset(payload) {
    return request.post(presets(), payload);
}
function updatePreset(payload) {
    return request.post(presets(), payload);
}
function deletePreset(arg) {
    return request.post(deletePreset$1(), arg);
}
function getSearchEnabled() {
    return request.get(searchEnabled());
}
function getUser() {
    return request.get(user());
}
var searchConversations = function (q, pageNumber) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, request.get(search(q, pageNumber))];
    });
}); };
var getAIEndpoints = function () {
    return request.get(aiEndpoints());
};
var updateTokenCount = function (text) {
    return request.post(tokenizer(), { arg: text });
};
var login = function (payload) {
    return request.post(login$1(), payload);
};
var logout = function () {
    return request.post(logout$1());
};
var register = function (payload) {
    return request.post(register$1(), payload);
};
var refreshToken = function () {
    return request.post(refreshToken$1());
};
var getLoginGoogle = function () {
    return request.get(loginGoogle());
};
var requestPasswordReset = function (payload) {
    return request.post(requestPasswordReset$1(), payload);
};
var resetPassword = function (payload) {
    return request.post(resetPassword$1(), payload);
};
var getAvailablePlugins = function () {
    return request.get(plugins());
};
var updateUserPlugins = function (payload) {
    return request.post(userPlugins(), payload);
};
var getStartupConfig = function () {
    return request.get(config());
};

exports.EModelEndpoint = void 0;
(function (EModelEndpoint) {
    EModelEndpoint["azureOpenAI"] = "azureOpenAI";
    EModelEndpoint["openAI"] = "openAI";
    EModelEndpoint["bingAI"] = "bingAI";
    EModelEndpoint["chatGPT"] = "chatGPT";
    EModelEndpoint["chatGPTBrowser"] = "chatGPTBrowser";
    EModelEndpoint["google"] = "google";
    EModelEndpoint["gptPlugins"] = "gptPlugins";
    EModelEndpoint["anthropic"] = "anthropic";
})(exports.EModelEndpoint || (exports.EModelEndpoint = {}));

exports.QueryKeys = void 0;
(function (QueryKeys) {
    QueryKeys["messages"] = "messsages";
    QueryKeys["allConversations"] = "allConversations";
    QueryKeys["conversation"] = "conversation";
    QueryKeys["searchEnabled"] = "searchEnabled";
    QueryKeys["user"] = "user";
    QueryKeys["endpoints"] = "endpoints";
    QueryKeys["presets"] = "presets";
    QueryKeys["searchResults"] = "searchResults";
    QueryKeys["tokenCount"] = "tokenCount";
    QueryKeys["availablePlugins"] = "availablePlugins";
    QueryKeys["startupConfig"] = "startupConfig";
})(exports.QueryKeys || (exports.QueryKeys = {}));
var useAbortRequestWithMessage = function () {
    return reactQuery.useMutation(function (_a) {
        var endpoint = _a.endpoint, abortKey = _a.abortKey, message = _a.message;
        return abortRequestWithMessage(endpoint, abortKey, message);
    });
};
var useGetUserQuery = function (config) {
    return reactQuery.useQuery([exports.QueryKeys.user], function () { return getUser(); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false, retry: false }, config));
};
var useGetMessagesByConvoId = function (id, config) {
    return reactQuery.useQuery([exports.QueryKeys.messages, id], function () { return getMessagesByConvoId(id); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
var useGetConversationByIdQuery = function (id, config) {
    return reactQuery.useQuery([exports.QueryKeys.conversation, id], function () { return getConversationById(id); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
//This isn't ideal because its just a query and we're using mutation, but it was the only way
//to make it work with how the Chat component is structured
var useGetConversationByIdMutation = function (id) {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function () { return getConversationById(id); }, {
        // onSuccess: (res: t.TConversation) => {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.conversation, id]);
        },
    });
};
var useUpdateConversationMutation = function (id) {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return updateConversation(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.conversation, id]);
            queryClient.invalidateQueries([exports.QueryKeys.allConversations]);
        },
    });
};
var useDeleteConversationMutation = function (id) {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return deleteConversation(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.conversation, id]);
            queryClient.invalidateQueries([exports.QueryKeys.allConversations]);
        },
    });
};
var useClearConversationsMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function () { return clearAllConversations(); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.allConversations]);
        },
    });
};
var useGetConversationsQuery = function (pageNumber, config) {
    return reactQuery.useQuery([exports.QueryKeys.allConversations, pageNumber], function () { return getConversations(pageNumber); }, __assign({ refetchOnReconnect: false, refetchOnMount: false, retry: 1 }, config));
};
var useGetSearchEnabledQuery = function (config) {
    return reactQuery.useQuery([exports.QueryKeys.searchEnabled], function () { return getSearchEnabled(); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
var useGetEndpointsQuery = function () {
    return reactQuery.useQuery([exports.QueryKeys.endpoints], function () { return getAIEndpoints(); }, {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
};
var useCreatePresetMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return createPreset(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.presets]);
        },
    });
};
var useUpdatePresetMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return updatePreset(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.presets]);
        },
    });
};
var useGetPresetsQuery = function (config) {
    return reactQuery.useQuery([exports.QueryKeys.presets], function () { return getPresets(); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
var useDeletePresetMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return deletePreset(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.presets]);
        },
    });
};
var useSearchQuery = function (searchQuery, pageNumber, config) {
    return reactQuery.useQuery([exports.QueryKeys.searchResults, pageNumber, searchQuery], function () { return searchConversations(searchQuery, pageNumber); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
var useUpdateTokenCountMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (text) { return updateTokenCount(text); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.tokenCount]);
        },
    });
};
var useLoginUserMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return login(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.user]);
        },
    });
};
var useRegisterUserMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return register(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.user]);
        },
    });
};
var useLogoutUserMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function () { return logout(); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.user]);
        },
    });
};
var useRefreshTokenMutation = function () {
    return reactQuery.useMutation(function () { return refreshToken(); }, {});
};
var useRequestPasswordResetMutation = function () {
    return reactQuery.useMutation(function (payload) {
        return requestPasswordReset(payload);
    });
};
var useResetPasswordMutation = function () {
    return reactQuery.useMutation(function (payload) { return resetPassword(payload); });
};
var useAvailablePluginsQuery = function () {
    return reactQuery.useQuery([exports.QueryKeys.availablePlugins], function () { return getAvailablePlugins(); }, {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
};
var useUpdateUserPluginsMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return updateUserPlugins(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.user]);
        },
    });
};
var useGetStartupConfig = function () {
    return reactQuery.useQuery([exports.QueryKeys.startupConfig], function () { return getStartupConfig(); }, {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
};

function setAcceptLanguageHeader(value) {
    axios.defaults.headers.common['Accept-Language'] = value;
}
function setTokenHeader(token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

/**
 * Copyright (C) 2016 Maxime Petazzoni <maxime.petazzoni@bulix.org>.
 * All rights reserved.
 */

var SSE = function (url, options) {
  if (!(this instanceof SSE)) {
    return new SSE(url, options);
  }

  this.INITIALIZING = -1;
  this.CONNECTING = 0;
  this.OPEN = 1;
  this.CLOSED = 2;

  this.url = url;

  options = options || {};
  this.headers = options.headers || {};
  this.payload = options.payload !== undefined ? options.payload : '';
  this.method = options.method || (this.payload && 'POST' || 'GET');
  this.withCredentials = !!options.withCredentials;

  this.FIELD_SEPARATOR = ':';
  this.listeners = {};

  this.xhr = null;
  this.readyState = this.INITIALIZING;
  this.progress = 0;
  this.chunk = '';

  this.addEventListener = function(type, listener) {
    if (this.listeners[type] === undefined) {
      this.listeners[type] = [];
    }

    if (this.listeners[type].indexOf(listener) === -1) {
      this.listeners[type].push(listener);
    }
  };

  this.removeEventListener = function(type, listener) {
    if (this.listeners[type] === undefined) {
      return;
    }

    var filtered = [];
    this.listeners[type].forEach(function(element) {
      if (element !== listener) {
        filtered.push(element);
      }
    });
    if (filtered.length === 0) {
      delete this.listeners[type];
    } else {
      this.listeners[type] = filtered;
    }
  };

  this.dispatchEvent = function(e) {
    if (!e) {
      return true;
    }

    e.source = this;

    var onHandler = 'on' + e.type;
    if (this.hasOwnProperty(onHandler)) {
      this[onHandler].call(this, e);
      if (e.defaultPrevented) {
        return false;
      }
    }

    if (this.listeners[e.type]) {
      return this.listeners[e.type].every(function(callback) {
        callback(e);
        return !e.defaultPrevented;
      });
    }

    return true;
  };

  this._setReadyState = function(state) {
    var event = new CustomEvent('readystatechange');
    event.readyState = state;
    this.readyState = state;
    this.dispatchEvent(event);
  };

  this._onStreamFailure = function(e) {
    var event = new CustomEvent('error');
    event.data = e.currentTarget.response;
    this.dispatchEvent(event);
    this.close();
  };

  this._onStreamAbort = function(e) {
    this.dispatchEvent(new CustomEvent('abort'));
    this.close();
  };

  this._onStreamProgress = function(e) {
    if (!this.xhr) {
      return;
    }

    if (this.xhr.status !== 200) {
      this._onStreamFailure(e);
      return;
    }

    if (this.readyState == this.CONNECTING) {
      this.dispatchEvent(new CustomEvent('open'));
      this._setReadyState(this.OPEN);
    }

    var data = this.xhr.responseText.substring(this.progress);
    this.progress += data.length;
    data.split(/(\r\n|\r|\n){2}/g).forEach(function(part) {
      if (part.trim().length === 0) {
        this.dispatchEvent(this._parseEventChunk(this.chunk.trim()));
        this.chunk = '';
      } else {
        this.chunk += part;
      }
    }.bind(this));
  };

  this._onStreamLoaded = function(e) {
    this._onStreamProgress(e);

    // Parse the last chunk.
    this.dispatchEvent(this._parseEventChunk(this.chunk));
    this.chunk = '';
  };

  /**
   * Parse a received SSE event chunk into a constructed event object.
   */
  this._parseEventChunk = function(chunk) {
    if (!chunk || chunk.length === 0) {
      return null;
    }

    var e = {'id': null, 'retry': null, 'data': '', 'event': 'message'};
    chunk.split(/\n|\r\n|\r/).forEach(function(line) {
      line = line.trimRight();
      var index = line.indexOf(this.FIELD_SEPARATOR);
      if (index <= 0) {
        // Line was either empty, or started with a separator and is a comment.
        // Either way, ignore.
        return;
      }

      var field = line.substring(0, index);
      if (!(field in e)) {
        return;
      }

      var value = line.substring(index + 1).trimLeft();
      if (field === 'data') {
        e[field] += value;
      } else {
        e[field] = value;
      }
    }.bind(this));

    var event = new CustomEvent(e.event);
    event.data = e.data;
    event.id = e.id;
    return event;
  };

  this._checkStreamClosed = function() {
    if (!this.xhr) {
      return;
    }

    if (this.xhr.readyState === XMLHttpRequest.DONE) {
      this._setReadyState(this.CLOSED);
    }
  };

  this.stream = function() {
    this._setReadyState(this.CONNECTING);

    this.xhr = new XMLHttpRequest();
    this.xhr.addEventListener('progress', this._onStreamProgress.bind(this));
    this.xhr.addEventListener('load', this._onStreamLoaded.bind(this));
    this.xhr.addEventListener('readystatechange', this._checkStreamClosed.bind(this));
    this.xhr.addEventListener('error', this._onStreamFailure.bind(this));
    this.xhr.addEventListener('abort', this._onStreamAbort.bind(this));
    this.xhr.open(this.method, this.url);
    for (var header in this.headers) {
      this.xhr.setRequestHeader(header, this.headers[header]);
    }
    this.xhr.withCredentials = this.withCredentials;
    this.xhr.send(this.payload);
  };

  this.close = function() {
    if (this.readyState === this.CLOSED) {
      return;
    }

    this.xhr.abort();
    this.xhr = null;
    this._setReadyState(this.CLOSED);
  };
};
// Export our SSE module for npm.js
// if (typeof exports !== 'undefined') {
//   // exports.SSE = SSE;
//   module.exports = { SSE };
// }

function createPayload(submission) {
    var conversation = submission.conversation, message = submission.message, endpointOption = submission.endpointOption;
    var conversationId = conversation.conversationId;
    var endpoint = endpointOption.endpoint;
    var endpointUrlMap = {
        azureOpenAI: '/api/ask/azureOpenAI',
        openAI: '/api/ask/openAI',
        google: '/api/ask/google',
        bingAI: '/api/ask/bingAI',
        chatGPT: '/api/ask/chatGPT',
        chatGPTBrowser: '/api/ask/chatGPTBrowser',
        gptPlugins: '/api/ask/gptPlugins',
        anthropic: '/api/ask/anthropic',
    };
    var server = endpointUrlMap[endpoint];
    var payload = __assign(__assign(__assign({}, message), endpointOption), { conversationId: conversationId });
    return { server: server, payload: payload };
}

exports.SSE = SSE;
exports.abortRequestWithMessage = abortRequestWithMessage;
exports.clearAllConversations = clearAllConversations;
exports.createPayload = createPayload;
exports.createPreset = createPreset;
exports.deleteConversation = deleteConversation;
exports.deletePreset = deletePreset;
exports.getAIEndpoints = getAIEndpoints;
exports.getAvailablePlugins = getAvailablePlugins;
exports.getConversationById = getConversationById;
exports.getConversations = getConversations;
exports.getLoginGoogle = getLoginGoogle;
exports.getMessagesByConvoId = getMessagesByConvoId;
exports.getPresets = getPresets;
exports.getSearchEnabled = getSearchEnabled;
exports.getStartupConfig = getStartupConfig;
exports.getUser = getUser;
exports.login = login;
exports.logout = logout;
exports.refreshToken = refreshToken;
exports.register = register;
exports.requestPasswordReset = requestPasswordReset;
exports.resetPassword = resetPassword;
exports.searchConversations = searchConversations;
exports.setAcceptLanguageHeader = setAcceptLanguageHeader;
exports.setTokenHeader = setTokenHeader;
exports.updateConversation = updateConversation;
exports.updatePreset = updatePreset;
exports.updateTokenCount = updateTokenCount;
exports.updateUserPlugins = updateUserPlugins;
exports.useAbortRequestWithMessage = useAbortRequestWithMessage;
exports.useAvailablePluginsQuery = useAvailablePluginsQuery;
exports.useClearConversationsMutation = useClearConversationsMutation;
exports.useCreatePresetMutation = useCreatePresetMutation;
exports.useDeleteConversationMutation = useDeleteConversationMutation;
exports.useDeletePresetMutation = useDeletePresetMutation;
exports.useGetConversationByIdMutation = useGetConversationByIdMutation;
exports.useGetConversationByIdQuery = useGetConversationByIdQuery;
exports.useGetConversationsQuery = useGetConversationsQuery;
exports.useGetEndpointsQuery = useGetEndpointsQuery;
exports.useGetMessagesByConvoId = useGetMessagesByConvoId;
exports.useGetPresetsQuery = useGetPresetsQuery;
exports.useGetSearchEnabledQuery = useGetSearchEnabledQuery;
exports.useGetStartupConfig = useGetStartupConfig;
exports.useGetUserQuery = useGetUserQuery;
exports.useLoginUserMutation = useLoginUserMutation;
exports.useLogoutUserMutation = useLogoutUserMutation;
exports.useRefreshTokenMutation = useRefreshTokenMutation;
exports.useRegisterUserMutation = useRegisterUserMutation;
exports.useRequestPasswordResetMutation = useRequestPasswordResetMutation;
exports.useResetPasswordMutation = useResetPasswordMutation;
exports.useSearchQuery = useSearchQuery;
exports.useUpdateConversationMutation = useUpdateConversationMutation;
exports.useUpdatePresetMutation = useUpdatePresetMutation;
exports.useUpdateTokenCountMutation = useUpdateTokenCountMutation;
exports.useUpdateUserPluginsMutation = useUpdateUserPluginsMutation;
