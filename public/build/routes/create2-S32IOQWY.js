import "/build/_shared/chunk-DWW3T4T6.js";
import {
  Box_default,
  FormControl_default,
  InputLabel_default,
  MenuItem_default,
  Select_default,
  TextField_default
} from "/build/_shared/chunk-SRMGHJLC.js";
import {
  Button_default
} from "/build/_shared/chunk-C7GHH2ZQ.js";
import "/build/_shared/chunk-KQSRV3KE.js";
import {
  Form,
  init_react_router_dom,
  matchRoutes,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-D7N37Z4Z.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse2;
    exports.serialize = serialize2;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var pairs = str.split(";");
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var index = pair.indexOf("=");
        if (index < 0) {
          continue;
        }
        var key = pair.substring(0, index).trim();
        if (void 0 == obj[key]) {
          var val = pair.substring(index + 1, pair.length).trim();
          if (val[0] === '"') {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/warnings.js
function warnOnce(condition, message) {
  if (!condition && !alreadyWarned[message]) {
    alreadyWarned[message] = true;
    console.warn(message);
  }
}
var alreadyWarned;
var init_warnings = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/warnings.js"() {
    alreadyWarned = {};
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/cookies.js
async function encodeCookieValue(sign, value, secrets) {
  let encoded = encodeData(value);
  if (secrets.length > 0) {
    encoded = await sign(encoded, secrets[0]);
  }
  return encoded;
}
async function decodeCookieValue(unsign, value, secrets) {
  if (secrets.length > 0) {
    for (let secret of secrets) {
      let unsignedValue = await unsign(value, secret);
      if (unsignedValue !== false) {
        return decodeData(unsignedValue);
      }
    }
    return null;
  }
  return decodeData(value);
}
function encodeData(value) {
  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch (error) {
    return {};
  }
}
function myEscape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, code;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (/[\w*+\-./@]/.exec(chr)) {
      result += chr;
    } else {
      code = chr.charCodeAt(0);
      if (code < 256) {
        result += "%" + hex(code, 2);
      } else {
        result += "%u" + hex(code, 4).toUpperCase();
      }
    }
  }
  return result;
}
function hex(code, length) {
  let result = code.toString(16);
  while (result.length < length)
    result = "0" + result;
  return result;
}
function myUnescape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, part;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (chr === "%") {
      if (str.charAt(index) === "u") {
        part = str.slice(index + 1, index + 5);
        if (/^[\da-f]{4}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 5;
          continue;
        }
      } else {
        part = str.slice(index, index + 2);
        if (/^[\da-f]{2}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 2;
          continue;
        }
      }
    }
    result += chr;
  }
  return result;
}
function warnOnceAboutExpiresCookie(name, expires) {
  warnOnce(!expires, `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
}
var import_cookie, createCookieFactory, isCookie;
var init_cookies = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/cookies.js"() {
    import_cookie = __toESM(require_cookie());
    init_warnings();
    createCookieFactory = ({
      sign,
      unsign
    }) => (name, cookieOptions = {}) => {
      let {
        secrets,
        ...options
      } = {
        secrets: [],
        path: "/",
        sameSite: "lax",
        ...cookieOptions
      };
      warnOnceAboutExpiresCookie(name, options.expires);
      return {
        get name() {
          return name;
        },
        get isSigned() {
          return secrets.length > 0;
        },
        get expires() {
          return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
        },
        async parse(cookieHeader, parseOptions) {
          if (!cookieHeader)
            return null;
          let cookies = (0, import_cookie.parse)(cookieHeader, {
            ...options,
            ...parseOptions
          });
          return name in cookies ? cookies[name] === "" ? "" : await decodeCookieValue(unsign, cookies[name], secrets) : null;
        },
        async serialize(value, serializeOptions) {
          return (0, import_cookie.serialize)(name, value === "" ? "" : await encodeCookieValue(sign, value, secrets), {
            ...options,
            ...serializeOptions
          });
        }
      };
    };
    isCookie = (object) => {
      return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
    };
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/utils.js
function stringToArray(s) {
  const utf8 = unescape(encodeURIComponent(s));
  return Uint8Array.from(utf8, (_, i) => utf8.charCodeAt(i));
}
function arrayToString(a) {
  const utf8 = String.fromCharCode.apply(null, a);
  return decodeURIComponent(escape(utf8));
}
function mergeArrays(...arrays) {
  const out = new Uint8Array(arrays.reduce((total, arr) => total + arr.length, 0));
  let offset = 0;
  for (const arr of arrays) {
    out.set(arr, offset);
    offset += arr.length;
  }
  return out;
}
function arraysEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
var init_utils = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/utils.js"() {
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/search.js
function coerce(a) {
  if (a instanceof Uint8Array) {
    return (index) => a[index];
  }
  return a;
}
function jsmemcmp(buf1, pos1, buf2, pos2, len) {
  const fn1 = coerce(buf1);
  const fn2 = coerce(buf2);
  for (let i = 0; i < len; ++i) {
    if (fn1(pos1 + i) !== fn2(pos2 + i)) {
      return false;
    }
  }
  return true;
}
function createOccurenceTable(s) {
  const table = new Array(256).fill(s.length);
  if (s.length > 1) {
    for (let i = 0; i < s.length - 1; i++) {
      table[s[i]] = s.length - 1 - i;
    }
  }
  return table;
}
var MATCH, StreamSearch, ReadableStreamSearch, EOQ, QueueableStreamSearch;
var init_search = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/search.js"() {
    init_utils();
    MATCH = Symbol("Match");
    StreamSearch = class {
      constructor(needle) {
        this._lookbehind = new Uint8Array();
        if (typeof needle === "string") {
          this._needle = needle = stringToArray(needle);
        } else {
          this._needle = needle;
        }
        this._lastChar = needle[needle.length - 1];
        this._occ = createOccurenceTable(needle);
      }
      feed(chunk) {
        let pos = 0;
        let tokens;
        const allTokens = [];
        while (pos !== chunk.length) {
          ;
          [pos, ...tokens] = this._feed(chunk, pos);
          allTokens.push(...tokens);
        }
        return allTokens;
      }
      end() {
        const tail = this._lookbehind;
        this._lookbehind = new Uint8Array();
        return tail;
      }
      _feed(data, bufPos) {
        const tokens = [];
        let pos = -this._lookbehind.length;
        if (pos < 0) {
          while (pos < 0 && pos <= data.length - this._needle.length) {
            const ch = this._charAt(data, pos + this._needle.length - 1);
            if (ch === this._lastChar && this._memcmp(data, pos, this._needle.length - 1)) {
              if (pos > -this._lookbehind.length) {
                tokens.push(this._lookbehind.slice(0, this._lookbehind.length + pos));
              }
              tokens.push(MATCH);
              this._lookbehind = new Uint8Array();
              return [
                pos + this._needle.length,
                ...tokens
              ];
            } else {
              pos += this._occ[ch];
            }
          }
          if (pos < 0) {
            while (pos < 0 && !this._memcmp(data, pos, data.length - pos)) {
              pos++;
            }
          }
          if (pos >= 0) {
            tokens.push(this._lookbehind);
            this._lookbehind = new Uint8Array();
          } else {
            const bytesToCutOff = this._lookbehind.length + pos;
            if (bytesToCutOff > 0) {
              tokens.push(this._lookbehind.slice(0, bytesToCutOff));
              this._lookbehind = this._lookbehind.slice(bytesToCutOff);
            }
            this._lookbehind = Uint8Array.from(new Array(this._lookbehind.length + data.length), (_, i) => this._charAt(data, i - this._lookbehind.length));
            return [
              data.length,
              ...tokens
            ];
          }
        }
        pos += bufPos;
        while (pos <= data.length - this._needle.length) {
          const ch = data[pos + this._needle.length - 1];
          if (ch === this._lastChar && data[pos] === this._needle[0] && jsmemcmp(this._needle, 0, data, pos, this._needle.length - 1)) {
            if (pos > bufPos) {
              tokens.push(data.slice(bufPos, pos));
            }
            tokens.push(MATCH);
            return [
              pos + this._needle.length,
              ...tokens
            ];
          } else {
            pos += this._occ[ch];
          }
        }
        if (pos < data.length) {
          while (pos < data.length && (data[pos] !== this._needle[0] || !jsmemcmp(data, pos, this._needle, 0, data.length - pos))) {
            ++pos;
          }
          if (pos < data.length) {
            this._lookbehind = data.slice(pos);
          }
        }
        if (pos > 0) {
          tokens.push(data.slice(bufPos, pos < data.length ? pos : data.length));
        }
        return [
          data.length,
          ...tokens
        ];
      }
      _charAt(data, pos) {
        if (pos < 0) {
          return this._lookbehind[this._lookbehind.length + pos];
        }
        return data[pos];
      }
      _memcmp(data, pos, len) {
        return jsmemcmp(this._charAt.bind(this, data), pos, this._needle, 0, len);
      }
    };
    ReadableStreamSearch = class {
      constructor(needle, _readableStream) {
        this._readableStream = _readableStream;
        this._search = new StreamSearch(needle);
      }
      async *[Symbol.asyncIterator]() {
        const reader = this._readableStream.getReader();
        try {
          while (true) {
            const result = await reader.read();
            if (result.done) {
              break;
            }
            yield* this._search.feed(result.value);
          }
          const tail = this._search.end();
          if (tail.length) {
            yield tail;
          }
        } finally {
          reader.releaseLock();
        }
      }
    };
    EOQ = Symbol("End of Queue");
    QueueableStreamSearch = class {
      constructor(needle) {
        this._chunksQueue = [];
        this._closed = false;
        this._search = new StreamSearch(needle);
      }
      push(...chunks) {
        if (this._closed) {
          throw new Error("cannot call push after close");
        }
        this._chunksQueue.push(...chunks);
        if (this._notify) {
          this._notify();
        }
      }
      close() {
        if (this._closed) {
          throw new Error("close was already called");
        }
        this._closed = true;
        this._chunksQueue.push(EOQ);
        if (this._notify) {
          this._notify();
        }
      }
      async *[Symbol.asyncIterator]() {
        while (true) {
          let chunk;
          while (!(chunk = this._chunksQueue.shift())) {
            await new Promise((resolve) => this._notify = resolve);
            this._notify = void 0;
          }
          if (chunk === EOQ) {
            break;
          }
          yield* this._search.feed(chunk);
        }
        const tail = this._search.end();
        if (tail.length) {
          yield tail;
        }
      }
    };
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/index.js
function parseContentDisposition(header) {
  const parts = header.split(";").map((part) => part.trim());
  if (parts.shift() !== "form-data") {
    throw new Error('malformed content-disposition header: missing "form-data" in `' + JSON.stringify(parts) + "`");
  }
  const out = {};
  for (const part of parts) {
    const kv = part.split("=", 2);
    if (kv.length !== 2) {
      throw new Error("malformed content-disposition header: key-value pair not found - " + part + " in `" + header + "`");
    }
    const [name, value] = kv;
    if (value[0] === '"' && value[value.length - 1] === '"') {
      out[name] = value.slice(1, -1).replace(/\\"/g, '"');
    } else if (value[0] !== '"' && value[value.length - 1] !== '"') {
      out[name] = value;
    } else if (value[0] === '"' && value[value.length - 1] !== '"' || value[0] !== '"' && value[value.length - 1] === '"') {
      throw new Error("malformed content-disposition header: mismatched quotations in `" + header + "`");
    }
  }
  if (!out.name) {
    throw new Error("malformed content-disposition header: missing field name in `" + header + "`");
  }
  return out;
}
function parsePartHeaders(lines) {
  const entries = [];
  let disposition = false;
  let line;
  while (typeof (line = lines.shift()) !== "undefined") {
    const colon = line.indexOf(":");
    if (colon === -1) {
      throw new Error("malformed multipart-form header: missing colon");
    }
    const header = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    switch (header) {
      case "content-disposition":
        disposition = true;
        entries.push(...Object.entries(parseContentDisposition(value)));
        break;
      case "content-type":
        entries.push([
          "contentType",
          value
        ]);
    }
  }
  if (!disposition) {
    throw new Error("malformed multipart-form header: missing content-disposition");
  }
  return Object.fromEntries(entries);
}
async function readHeaderLines(it, needle) {
  let firstChunk = true;
  let lastTokenWasMatch = false;
  const headerLines = [[]];
  const crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    const result = await it.next();
    if (result.done) {
      throw new Error("malformed multipart-form data: unexpected end of stream");
    }
    if (firstChunk && result.value !== MATCH && arraysEqual(result.value.slice(0, 2), dash)) {
      return [
        void 0,
        new Uint8Array()
      ];
    }
    let chunk;
    if (result.value !== MATCH) {
      chunk = result.value;
    } else if (!lastTokenWasMatch) {
      chunk = needle;
    } else {
      throw new Error("malformed multipart-form data: unexpected boundary");
    }
    if (!chunk.length) {
      continue;
    }
    if (firstChunk) {
      firstChunk = false;
    }
    const tokens = crlfSearch.feed(chunk);
    for (const [i, token] of tokens.entries()) {
      const isMatch = token === MATCH;
      if (!isMatch && !token.length) {
        continue;
      }
      if (lastTokenWasMatch && isMatch) {
        tokens.push(crlfSearch.end());
        return [
          headerLines.filter((chunks) => chunks.length).map(mergeArrays2).map(arrayToString),
          mergeArrays(...tokens.slice(i + 1).map((token2) => token2 === MATCH ? CRLF : token2))
        ];
      }
      if (lastTokenWasMatch = isMatch) {
        headerLines.push([]);
      } else {
        headerLines[headerLines.length - 1].push(token);
      }
    }
  }
}
async function* streamMultipart(body, boundary) {
  const needle = mergeArrays(dash, stringToArray(boundary));
  const it = new ReadableStreamSearch(needle, body)[Symbol.asyncIterator]();
  for (; ; ) {
    const result = await it.next();
    if (result.done) {
      return;
    }
    if (result.value === MATCH) {
      break;
    }
  }
  const crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    let feedChunk = function(chunk) {
      const chunks = [];
      for (const token of crlfSearch.feed(chunk)) {
        if (trailingCRLF) {
          chunks.push(CRLF);
        }
        if (!(trailingCRLF = token === MATCH)) {
          chunks.push(token);
        }
      }
      return mergeArrays(...chunks);
    };
    const [headerLines, tail] = await readHeaderLines(it, needle);
    if (!headerLines) {
      return;
    }
    async function nextToken() {
      const result = await it.next();
      if (result.done) {
        throw new Error("malformed multipart-form data: unexpected end of stream");
      }
      return result;
    }
    let trailingCRLF = false;
    let done = false;
    async function nextChunk() {
      const result = await nextToken();
      let chunk;
      if (result.value !== MATCH) {
        chunk = result.value;
      } else if (!trailingCRLF) {
        chunk = CRLF;
      } else {
        done = true;
        return { value: crlfSearch.end() };
      }
      return { value: feedChunk(chunk) };
    }
    const bufferedChunks = [{ value: feedChunk(tail) }];
    yield {
      ...parsePartHeaders(headerLines),
      data: {
        [Symbol.asyncIterator]() {
          return this;
        },
        async next() {
          for (; ; ) {
            const result = bufferedChunks.shift();
            if (!result) {
              break;
            }
            if (result.value.length > 0) {
              return result;
            }
          }
          for (; ; ) {
            if (done) {
              return {
                done,
                value: void 0
              };
            }
            const result = await nextChunk();
            if (result.value.length > 0) {
              return result;
            }
          }
        }
      }
    };
    while (!done) {
      bufferedChunks.push(await nextChunk());
    }
  }
}
var mergeArrays2, dash, CRLF;
var init_src = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/index.js"() {
    init_search();
    init_utils();
    mergeArrays2 = Function.prototype.apply.bind(mergeArrays, void 0);
    dash = stringToArray("--");
    CRLF = stringToArray("\r\n");
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/formData.js
function composeUploadHandlers(...handlers) {
  return async (part) => {
    for (let handler of handlers) {
      let value = await handler(part);
      if (typeof value !== "undefined" && value !== null) {
        return value;
      }
    }
    return void 0;
  };
}
async function parseMultipartFormData(request, uploadHandler) {
  let contentType = request.headers.get("Content-Type") || "";
  let [type, boundary] = contentType.split(/\s*;\s*boundary=/);
  if (!request.body || !boundary || type !== "multipart/form-data") {
    throw new TypeError("Could not parse content as FormData.");
  }
  let formData = new FormData();
  let parts = streamMultipart(request.body, boundary);
  for await (let part of parts) {
    if (part.done)
      break;
    if (typeof part.filename === "string") {
      part.filename = part.filename.split(/[/\\]/).pop();
    }
    let value = await uploadHandler(part);
    if (typeof value !== "undefined" && value !== null) {
      formData.append(part.name, value);
    }
  }
  return formData;
}
var init_formData = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/formData.js"() {
    init_src();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/responses.js
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(response) {
  return redirectStatusCodes.has(response.status);
}
function isCatchResponse(response) {
  return response.headers.get("X-Remix-Catch") != null;
}
var json, redirect, redirectStatusCodes;
var init_responses = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/responses.js"() {
    json = (data, init = {}) => {
      let responseInit = typeof init === "number" ? {
        status: init
      } : init;
      let headers = new Headers(responseInit.headers);
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json; charset=utf-8");
      }
      return new Response(JSON.stringify(data), {
        ...responseInit,
        headers
      });
    };
    redirect = (url, init = 302) => {
      let responseInit = init;
      if (typeof responseInit === "number") {
        responseInit = {
          status: responseInit
        };
      } else if (typeof responseInit.status === "undefined") {
        responseInit.status = 302;
      }
      let headers = new Headers(responseInit.headers);
      headers.set("Location", url);
      return new Response(null, {
        ...responseInit,
        headers
      });
    };
    redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/data.js
async function callRouteAction({
  loadContext,
  match,
  request
}) {
  let action = match.route.module.action;
  if (!action) {
    let response = new Response(null, {
      status: 405
    });
    response.headers.set("X-Remix-Catch", "yes");
    return response;
  }
  let result;
  try {
    result = await action({
      request: stripDataParam(stripIndexParam(request)),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error)) {
      throw error;
    }
    if (!isRedirectResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
    }
    result = error;
  }
  if (result === void 0) {
    throw new Error(`You defined an action for route "${match.route.id}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  }
  return isResponse(result) ? result : json(result);
}
async function callRouteLoader({
  loadContext,
  match,
  request
}) {
  let loader = match.route.module.loader;
  if (!loader) {
    throw new Error(`You made a ${request.method} request to ${request.url} but did not provide a default component or \`loader\` for route "${match.route.id}", so there is no way to handle the request.`);
  }
  let result;
  try {
    result = await loader({
      request: stripDataParam(stripIndexParam(request)),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error)) {
      throw error;
    }
    if (!isRedirectResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
    }
    result = error;
  }
  if (result === void 0) {
    throw new Error(`You defined a loader for route "${match.route.id}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
  }
  return isResponse(result) ? result : json(result);
}
function stripIndexParam(request) {
  let url = new URL(request.url);
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  return new Request(url.href, request);
}
function stripDataParam(request) {
  let url = new URL(request.url);
  url.searchParams.delete("_data");
  return new Request(url.href, request);
}
function extractData(response) {
  let contentType = response.headers.get("Content-Type");
  if (contentType && /\bapplication\/json\b/.test(contentType)) {
    return response.json();
  }
  return response.text();
}
var init_data = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/data.js"() {
    init_responses();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/entry.js
function createEntryMatches(matches, routes) {
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: routes[match.route.id]
  }));
}
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo, routeId) => {
    memo[routeId] = manifest[routeId].module;
    return memo;
  }, {});
}
var init_entry = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/entry.js"() {
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/errors.js
async function serializeError(error) {
  return {
    message: error.message,
    stack: error.stack
  };
}
var init_errors = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/errors.js"() {
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie.secure = true;
        } else if (key === "httponly") {
          cookie.httpOnly = true;
        } else if (key === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse2(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key) {
          return key.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/headers.js
function getDocumentHeaders(build, matches, routeLoaderResponses, actionResponse) {
  return matches.reduce((parentHeaders, match, index) => {
    let routeModule = build.routes[match.route.id].module;
    let routeLoaderResponse = routeLoaderResponses[match.route.id];
    let loaderHeaders = routeLoaderResponse ? routeLoaderResponse.headers : new Headers();
    let actionHeaders = actionResponse ? actionResponse.headers : new Headers();
    let headers = new Headers(routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
      loaderHeaders,
      parentHeaders,
      actionHeaders
    }) : routeModule.headers : void 0);
    prependCookies(actionHeaders, headers);
    prependCookies(loaderHeaders, headers);
    prependCookies(parentHeaders, headers);
    return headers;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  if (parentSetCookieString) {
    let cookies = (0, import_set_cookie_parser.splitCookiesString)(parentSetCookieString);
    cookies.forEach((cookie) => {
      childHeaders.append("Set-Cookie", cookie);
    });
  }
}
var import_set_cookie_parser;
var init_headers = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/headers.js"() {
    import_set_cookie_parser = __toESM(require_set_cookie());
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/mode.js
function isServerMode(value) {
  return value === ServerMode.Development || value === ServerMode.Production || value === ServerMode.Test;
}
var ServerMode;
var init_mode = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/mode.js"() {
    (function(ServerMode2) {
      ServerMode2["Development"] = "development";
      ServerMode2["Production"] = "production";
      ServerMode2["Test"] = "test";
    })(ServerMode || (ServerMode = {}));
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/routeMatching.js
function matchServerRoutes(routes, pathname) {
  let matches = matchRoutes(routes, pathname);
  if (!matches)
    return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}
var init_routeMatching = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/routeMatching.js"() {
    init_react_router_dom();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/routes.js
function createRoutes(manifest, parentId) {
  return Object.entries(manifest).filter(([, route]) => route.parentId === parentId).map(([id, route]) => ({
    ...route,
    children: createRoutes(manifest, id)
  }));
}
var init_routes = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/routes.js"() {
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/markup.js
function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
var ESCAPE_LOOKUP, ESCAPE_REGEX;
var init_markup = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/markup.js"() {
    ESCAPE_LOOKUP = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/serverHandoff.js
function createServerHandoffString(serverHandoff) {
  return escapeHtml(JSON.stringify(serverHandoff));
}
var init_serverHandoff = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/serverHandoff.js"() {
    init_markup();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/server.js
async function handleDataRequest({
  handleDataRequest: handleDataRequest2,
  loadContext,
  matches,
  request,
  serverMode
}) {
  if (!isValidRequestMethod(request)) {
    return errorBoundaryError(new Error(`Invalid request method "${request.method}"`), 405);
  }
  let url = new URL(request.url);
  if (!matches) {
    return errorBoundaryError(new Error(`No route matches URL "${url.pathname}"`), 404);
  }
  let response;
  let match;
  try {
    if (isActionRequest(request)) {
      match = getRequestMatch(url, matches);
      response = await callRouteAction({
        loadContext,
        match,
        request
      });
    } else {
      let routeId = url.searchParams.get("_data");
      if (!routeId) {
        return errorBoundaryError(new Error(`Missing route id in ?_data`), 403);
      }
      let tempMatch = matches.find((match2) => match2.route.id === routeId);
      if (!tempMatch) {
        return errorBoundaryError(new Error(`Route "${routeId}" does not match URL "${url.pathname}"`), 403);
      }
      match = tempMatch;
      response = await callRouteLoader({
        loadContext,
        match,
        request
      });
    }
    if (isRedirectResponse(response)) {
      let headers = new Headers(response.headers);
      headers.set("X-Remix-Redirect", headers.get("Location"));
      headers.delete("Location");
      if (response.headers.get("Set-Cookie") !== null) {
        headers.set("X-Remix-Revalidate", "yes");
      }
      return new Response(null, {
        status: 204,
        headers
      });
    }
    if (handleDataRequest2) {
      response = await handleDataRequest2(response, {
        context: loadContext,
        params: match.params,
        request
      });
    }
    return response;
  } catch (error) {
    if (serverMode !== ServerMode.Test) {
      console.error(error);
    }
    if (serverMode === ServerMode.Development) {
      return errorBoundaryError(error, 500);
    }
    return errorBoundaryError(new Error("Unexpected Server Error"), 500);
  }
}
async function handleDocumentRequest({
  build,
  loadContext,
  matches,
  request,
  routes,
  serverMode
}) {
  let url = new URL(request.url);
  let appState = {
    trackBoundaries: true,
    trackCatchBoundaries: true,
    catchBoundaryRouteId: null,
    renderBoundaryRouteId: null,
    loaderBoundaryRouteId: null,
    error: void 0,
    catch: void 0
  };
  if (!isValidRequestMethod(request)) {
    matches = null;
    appState.trackCatchBoundaries = false;
    appState.catch = {
      data: null,
      status: 405,
      statusText: "Method Not Allowed"
    };
  } else if (!matches) {
    appState.trackCatchBoundaries = false;
    appState.catch = {
      data: null,
      status: 404,
      statusText: "Not Found"
    };
  }
  let actionStatus;
  let actionData;
  let actionMatch;
  let actionResponse;
  if (matches && isActionRequest(request)) {
    actionMatch = getRequestMatch(url, matches);
    try {
      actionResponse = await callRouteAction({
        loadContext,
        match: actionMatch,
        request
      });
      if (isRedirectResponse(actionResponse)) {
        return actionResponse;
      }
      actionStatus = {
        status: actionResponse.status,
        statusText: actionResponse.statusText
      };
      if (isCatchResponse(actionResponse)) {
        appState.catchBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "CatchBoundary");
        appState.trackCatchBoundaries = false;
        appState.catch = {
          ...actionStatus,
          data: await extractData(actionResponse)
        };
      } else {
        actionData = {
          [actionMatch.route.id]: await extractData(actionResponse)
        };
      }
    } catch (error) {
      appState.loaderBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "ErrorBoundary");
      appState.trackBoundaries = false;
      appState.error = await serializeError(error);
      if (serverMode !== ServerMode.Test) {
        console.error(`There was an error running the action for route ${actionMatch.route.id}`);
      }
    }
  }
  let routeModules = createEntryRouteModules(build.routes);
  let matchesToLoad = matches || [];
  if (appState.catch) {
    matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad, "CatchBoundary").slice(0, -1);
  } else if (appState.error) {
    matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad, "ErrorBoundary").slice(0, -1);
  }
  let loaderRequest = new Request(request.url, {
    body: null,
    headers: request.headers,
    method: request.method,
    redirect: request.redirect,
    signal: request.signal
  });
  let routeLoaderResults = await Promise.allSettled(matchesToLoad.map((match) => match.route.module.loader ? callRouteLoader({
    loadContext,
    match,
    request: loaderRequest
  }) : Promise.resolve(void 0)));
  let actionCatch = appState.catch;
  let actionError = appState.error;
  let actionCatchBoundaryRouteId = appState.catchBoundaryRouteId;
  let actionLoaderBoundaryRouteId = appState.loaderBoundaryRouteId;
  appState.catch = void 0;
  appState.error = void 0;
  let routeLoaderResponses = {};
  let loaderStatusCodes = [];
  let routeData = {};
  for (let index = 0; index < matchesToLoad.length; index++) {
    let match = matchesToLoad[index];
    let result = routeLoaderResults[index];
    let error = result.status === "rejected" ? result.reason : void 0;
    let response = result.status === "fulfilled" ? result.value : void 0;
    let isRedirect = response ? isRedirectResponse(response) : false;
    let isCatch = response ? isCatchResponse(response) : false;
    if (appState.catch || appState.error) {
      break;
    }
    if (!actionCatch && !actionError && response && isRedirect) {
      return response;
    }
    if (match.route.module.CatchBoundary) {
      appState.catchBoundaryRouteId = match.route.id;
    }
    if (match.route.module.ErrorBoundary) {
      appState.loaderBoundaryRouteId = match.route.id;
    }
    if (error) {
      loaderStatusCodes.push(500);
      appState.trackBoundaries = false;
      appState.error = await serializeError(error);
      if (serverMode !== ServerMode.Test) {
        console.error(`There was an error running the data loader for route ${match.route.id}`);
      }
      break;
    } else if (response) {
      routeLoaderResponses[match.route.id] = response;
      loaderStatusCodes.push(response.status);
      if (isCatch) {
        appState.trackCatchBoundaries = false;
        appState.catch = {
          data: await extractData(response),
          status: response.status,
          statusText: response.statusText
        };
        break;
      } else {
        routeData[match.route.id] = await extractData(response);
      }
    }
  }
  if (!appState.catch) {
    appState.catchBoundaryRouteId = actionCatchBoundaryRouteId;
  }
  if (!appState.error) {
    appState.loaderBoundaryRouteId = actionLoaderBoundaryRouteId;
  }
  appState.catch = actionCatch || appState.catch;
  appState.error = actionError || appState.error;
  let renderableMatches = getRenderableMatches(matches, appState);
  if (!renderableMatches) {
    renderableMatches = [];
    let root = routes[0];
    if (root !== null && root !== void 0 && root.module.CatchBoundary) {
      appState.catchBoundaryRouteId = "root";
      renderableMatches.push({
        params: {},
        pathname: "",
        route: routes[0]
      });
    }
  }
  let notOkResponse = actionStatus && actionStatus.status !== 200 ? actionStatus.status : loaderStatusCodes.find((status) => status !== 200);
  let responseStatusCode = appState.error ? 500 : typeof notOkResponse === "number" ? notOkResponse : appState.catch ? appState.catch.status : 200;
  let responseHeaders = getDocumentHeaders(build, renderableMatches, routeLoaderResponses, actionResponse);
  let entryMatches = createEntryMatches(renderableMatches, build.assets.routes);
  let serverHandoff = {
    actionData,
    appState,
    matches: entryMatches,
    routeData
  };
  let entryContext = {
    ...serverHandoff,
    manifest: build.assets,
    routeModules,
    serverHandoffString: createServerHandoffString(serverHandoff)
  };
  let handleDocumentRequest2 = build.entry.module.default;
  try {
    return await handleDocumentRequest2(request, responseStatusCode, responseHeaders, entryContext);
  } catch (error) {
    responseStatusCode = 500;
    appState.trackBoundaries = false;
    appState.error = await serializeError(error);
    entryContext.serverHandoffString = createServerHandoffString(serverHandoff);
    try {
      return await handleDocumentRequest2(request, responseStatusCode, responseHeaders, entryContext);
    } catch (error2) {
      if (serverMode !== ServerMode.Test) {
        console.error(error2);
      }
      let message = "Unexpected Server Error";
      if (serverMode === ServerMode.Development) {
        message += `

${String(error2)}`;
      }
      return new Response(message, {
        status: 500,
        headers: {
          "Content-Type": "text/plain"
        }
      });
    }
  }
}
async function handleResourceRequest({
  loadContext,
  matches,
  request,
  serverMode
}) {
  let match = matches.slice(-1)[0];
  try {
    if (isActionRequest(request)) {
      return await callRouteAction({
        match,
        loadContext,
        request
      });
    } else {
      return await callRouteLoader({
        match,
        loadContext,
        request
      });
    }
  } catch (error) {
    if (serverMode !== ServerMode.Test) {
      console.error(error);
    }
    let message = "Unexpected Server Error";
    if (serverMode === ServerMode.Development) {
      message += `

${String(error)}`;
    }
    return new Response(message, {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
}
function isActionRequest({
  method
}) {
  return validActionMethods.has(method.toUpperCase());
}
function isValidRequestMethod({
  method
}) {
  return validRequestMethods.has(method.toUpperCase());
}
async function errorBoundaryError(error, status) {
  return json(await serializeError(error), {
    status,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function isIndexRequestUrl(url) {
  for (let param of url.searchParams.getAll("index")) {
    if (param === "") {
      return true;
    }
  }
  return false;
}
function getRequestMatch(url, matches) {
  let match = matches.slice(-1)[0];
  if (!isIndexRequestUrl(url) && match.route.id.endsWith("/index")) {
    return matches.slice(-2)[0];
  }
  return match;
}
function getDeepestRouteIdWithBoundary(matches, key) {
  let matched = getMatchesUpToDeepestBoundary(matches, key).slice(-1)[0];
  return matched ? matched.route.id : null;
}
function getMatchesUpToDeepestBoundary(matches, key) {
  let deepestBoundaryIndex = -1;
  matches.forEach((match, index) => {
    if (match.route.module[key]) {
      deepestBoundaryIndex = index;
    }
  });
  if (deepestBoundaryIndex === -1) {
    return [];
  }
  return matches.slice(0, deepestBoundaryIndex + 1);
}
function getRenderableMatches(matches, appState) {
  if (!matches) {
    return null;
  }
  if (!appState.catch && !appState.error) {
    return matches;
  }
  let lastRenderableIndex = -1;
  matches.forEach((match, index) => {
    let id = match.route.id;
    if (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id || appState.catchBoundaryRouteId === id) {
      lastRenderableIndex = index;
    }
  });
  return matches.slice(0, lastRenderableIndex + 1);
}
var createRequestHandler, validActionMethods, validRequestMethods;
var init_server = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/server.js"() {
    init_data();
    init_entry();
    init_errors();
    init_headers();
    init_mode();
    init_routeMatching();
    init_routes();
    init_responses();
    init_serverHandoff();
    createRequestHandler = (build, mode) => {
      let routes = createRoutes(build.routes);
      let serverMode = isServerMode(mode) ? mode : ServerMode.Production;
      return async function requestHandler(request, loadContext = {}) {
        let url = new URL(request.url);
        let matches = matchServerRoutes(routes, url.pathname);
        let response;
        if (url.searchParams.has("_data")) {
          response = await handleDataRequest({
            request,
            loadContext,
            matches,
            handleDataRequest: build.entry.module.handleDataRequest,
            serverMode
          });
        } else if (matches && !matches[matches.length - 1].route.module.default) {
          response = await handleResourceRequest({
            request,
            loadContext,
            matches,
            serverMode
          });
        } else {
          response = await handleDocumentRequest({
            build,
            loadContext,
            matches,
            request,
            routes,
            serverMode
          });
        }
        if (request.method === "HEAD") {
          return new Response(null, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
          });
        }
        return response;
      };
    };
    validActionMethods = /* @__PURE__ */ new Set(["POST", "PUT", "PATCH", "DELETE"]);
    validRequestMethods = /* @__PURE__ */ new Set(["GET", "HEAD", ...validActionMethods]);
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions.js
function flash(name) {
  return `__flash_${name}__`;
}
function warnOnceAboutSigningSessionCookie(cookie) {
  warnOnce(cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/api/remix#signing-cookies for more information.`);
}
var createSession, isSession, createSessionStorageFactory;
var init_sessions = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions.js"() {
    init_cookies();
    init_warnings();
    createSession = (initialData = {}, id = "") => {
      let map = new Map(Object.entries(initialData));
      return {
        get id() {
          return id;
        },
        get data() {
          return Object.fromEntries(map);
        },
        has(name) {
          return map.has(name) || map.has(flash(name));
        },
        get(name) {
          if (map.has(name))
            return map.get(name);
          let flashName = flash(name);
          if (map.has(flashName)) {
            let value = map.get(flashName);
            map.delete(flashName);
            return value;
          }
          return void 0;
        },
        set(name, value) {
          map.set(name, value);
        },
        flash(name, value) {
          map.set(flash(name), value);
        },
        unset(name) {
          map.delete(name);
        }
      };
    };
    isSession = (object) => {
      return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
    };
    createSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg,
      createData,
      readData,
      updateData,
      deleteData
    }) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          let id = cookieHeader && await cookie.parse(cookieHeader, options);
          let data = id && await readData(id);
          return createSession(data || {}, id || "");
        },
        async commitSession(session, options) {
          let {
            id,
            data
          } = session;
          if (id) {
            await updateData(id, data, cookie.expires);
          } else {
            id = await createData(data, cookie.expires);
          }
          return cookie.serialize(id, options);
        },
        async destroySession(session, options) {
          await deleteData(session.id);
          return cookie.serialize("", {
            ...options,
            expires: new Date(0)
          });
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js
var createCookieSessionStorageFactory;
var init_cookieStorage = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js"() {
    init_cookies();
    init_sessions();
    createCookieSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg
    } = {}) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          return createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
        },
        async commitSession(session, options) {
          let serializedCookie = await cookie.serialize(session.data, options);
          if (serializedCookie.length > 4096) {
            throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
          }
          return serializedCookie;
        },
        async destroySession(_session, options) {
          return cookie.serialize("", {
            ...options,
            expires: new Date(0)
          });
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js
var createMemorySessionStorageFactory;
var init_memoryStorage = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js"() {
    createMemorySessionStorageFactory = (createSessionStorage) => ({
      cookie
    } = {}) => {
      let uniqueId = 0;
      let map = /* @__PURE__ */ new Map();
      return createSessionStorage({
        cookie,
        async createData(data, expires) {
          let id = (++uniqueId).toString();
          map.set(id, {
            data,
            expires
          });
          return id;
        },
        async readData(id) {
          if (map.has(id)) {
            let {
              data,
              expires
            } = map.get(id);
            if (!expires || expires > new Date()) {
              return data;
            }
            if (expires)
              map.delete(id);
          }
          return null;
        },
        async updateData(id, data, expires) {
          map.set(id, {
            data,
            expires
          });
        },
        async deleteData(id) {
          map.delete(id);
        }
      });
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/upload/errors.js
var MaxPartSizeExceededError;
var init_errors2 = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/upload/errors.js"() {
    MaxPartSizeExceededError = class extends Error {
      constructor(field, maxBytes) {
        super(`Field "${field}" exceeded upload size of ${maxBytes} bytes.`);
        this.field = field;
        this.maxBytes = maxBytes;
      }
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js
function createMemoryUploadHandler({
  filter,
  maxPartSize = 3e6
} = {}) {
  return async ({
    filename,
    contentType,
    name,
    data
  }) => {
    if (filter && !await filter({
      filename,
      contentType,
      name
    })) {
      return void 0;
    }
    let size = 0;
    let chunks = [];
    for await (let chunk of data) {
      size += chunk.byteLength;
      if (size > maxPartSize) {
        throw new MaxPartSizeExceededError(name, maxPartSize);
      }
      chunks.push(chunk);
    }
    if (typeof filename === "string") {
      return new File(chunks, filename, {
        type: contentType
      });
    }
    return await new Blob(chunks, {
      type: contentType
    }).text();
  };
}
var init_memoryUploadHandler = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js"() {
    init_errors2();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  MaxPartSizeExceededError: () => MaxPartSizeExceededError,
  createCookieFactory: () => createCookieFactory,
  createCookieSessionStorageFactory: () => createCookieSessionStorageFactory,
  createMemorySessionStorageFactory: () => createMemorySessionStorageFactory,
  createRequestHandler: () => createRequestHandler,
  createSession: () => createSession,
  createSessionStorageFactory: () => createSessionStorageFactory,
  isCookie: () => isCookie,
  isSession: () => isSession,
  json: () => json,
  redirect: () => redirect,
  unstable_composeUploadHandlers: () => composeUploadHandlers,
  unstable_createMemoryUploadHandler: () => createMemoryUploadHandler,
  unstable_parseMultipartFormData: () => parseMultipartFormData
});
var init_esm = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/index.js"() {
    init_cookies();
    init_formData();
    init_responses();
    init_server();
    init_sessions();
    init_cookieStorage();
    init_memoryStorage();
    init_memoryUploadHandler();
    init_errors2();
  }
});

// node_modules/@remix-run/cloudflare/dist/crypto.js
var require_crypto = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var encoder = new TextEncoder();
    var sign = async (value, secret) => {
      let key = await createKey(secret, ["sign"]);
      let data = encoder.encode(value);
      let signature = await crypto.subtle.sign("HMAC", key, data);
      let hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=+$/, "");
      return value + "." + hash;
    };
    var unsign = async (signed, secret) => {
      let index = signed.lastIndexOf(".");
      let value = signed.slice(0, index);
      let hash = signed.slice(index + 1);
      let key = await createKey(secret, ["verify"]);
      let data = encoder.encode(value);
      let signature = byteStringToUint8Array(atob(hash));
      let valid = await crypto.subtle.verify("HMAC", key, signature, data);
      return valid ? value : false;
    };
    async function createKey(secret, usages) {
      let key = await crypto.subtle.importKey("raw", encoder.encode(secret), {
        name: "HMAC",
        hash: "SHA-256"
      }, false, usages);
      return key;
    }
    function byteStringToUint8Array(byteString) {
      let array = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        array[i] = byteString.charCodeAt(i);
      }
      return array;
    }
    exports.sign = sign;
    exports.unsign = unsign;
  }
});

// node_modules/@remix-run/cloudflare/dist/implementations.js
var require_implementations = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/implementations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = (init_esm(), __toCommonJS(esm_exports));
    var crypto2 = require_crypto();
    var createCookie = serverRuntime.createCookieFactory({
      sign: crypto2.sign,
      unsign: crypto2.unsign
    });
    var createCookieSessionStorage = serverRuntime.createCookieSessionStorageFactory(createCookie);
    var createSessionStorage = serverRuntime.createSessionStorageFactory(createCookie);
    var createMemorySessionStorage = serverRuntime.createMemorySessionStorageFactory(createSessionStorage);
    exports.createCookie = createCookie;
    exports.createCookieSessionStorage = createCookieSessionStorage;
    exports.createMemorySessionStorage = createMemorySessionStorage;
    exports.createSessionStorage = createSessionStorage;
  }
});

// node_modules/@remix-run/cloudflare/dist/sessions/cloudflareKVSessionStorage.js
var require_cloudflareKVSessionStorage = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/sessions/cloudflareKVSessionStorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var implementations = require_implementations();
    function createCloudflareKVSessionStorage({
      cookie,
      kv
    }) {
      return implementations.createSessionStorage({
        cookie,
        async createData(data, expires) {
          while (true) {
            let randomBytes = new Uint8Array(8);
            crypto.getRandomValues(randomBytes);
            let id = [...randomBytes].map((x) => x.toString(16).padStart(2, "0")).join("");
            if (await kv.get(id, "json")) {
              continue;
            }
            await kv.put(id, JSON.stringify(data), {
              expiration: expires ? Math.round(expires.getTime() / 1e3) : void 0
            });
            return id;
          }
        },
        async readData(id) {
          let session = await kv.get(id);
          if (!session) {
            return null;
          }
          return JSON.parse(session);
        },
        async updateData(id, data, expires) {
          await kv.put(id, JSON.stringify(data), {
            expiration: expires ? Math.round(expires.getTime() / 1e3) : void 0
          });
        },
        async deleteData(id) {
          await kv.delete(id);
        }
      });
    }
    exports.createCloudflareKVSessionStorage = createCloudflareKVSessionStorage;
  }
});

// node_modules/@remix-run/cloudflare/dist/index.js
var require_dist = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cloudflareKVSessionStorage = require_cloudflareKVSessionStorage();
    var implementations = require_implementations();
    var serverRuntime = (init_esm(), __toCommonJS(esm_exports));
    exports.createCloudflareKVSessionStorage = cloudflareKVSessionStorage.createCloudflareKVSessionStorage;
    exports.createCookie = implementations.createCookie;
    exports.createCookieSessionStorage = implementations.createCookieSessionStorage;
    exports.createMemorySessionStorage = implementations.createMemorySessionStorage;
    exports.createSessionStorage = implementations.createSessionStorage;
    Object.defineProperty(exports, "MaxPartSizeExceededError", {
      enumerable: true,
      get: function() {
        return serverRuntime.MaxPartSizeExceededError;
      }
    });
    Object.defineProperty(exports, "createRequestHandler", {
      enumerable: true,
      get: function() {
        return serverRuntime.createRequestHandler;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "unstable_composeUploadHandlers", {
      enumerable: true,
      get: function() {
        return serverRuntime.unstable_composeUploadHandlers;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return serverRuntime.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return serverRuntime.unstable_parseMultipartFormData;
      }
    });
  }
});

// app/routes/create2.tsx
var import_cloudflare = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Create() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
      method: "post",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
          sx: {
            "& > :not(style)": { m: 1, width: "25ch" }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "\u017Bona"
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              name: "wifeFirstName",
              id: "wife.firstName",
              label: "Imi\u0119",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 59,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              name: "wifeLastName",
              id: "wife.lastName",
              label: "Nazwisko",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              name: "wifePhoneNumber",
              type: "tel",
              id: "wife.phoneNumber",
              label: "Nr telefonu",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              name: "wifeEmail",
              type: "email",
              id: "wife.email",
              label: "Email",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 81,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              type: "number",
              InputProps: {
                inputProps: {
                  max: 2010,
                  min: 1920
                }
              },
              name: "wifeBirthYear",
              id: "wife.birthYear",
              label: "Rok urodzenia",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 89,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "M\u0105\u017C"
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 104,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              name: "husbandFirstName",
              id: "husband.firstName",
              label: "Imi\u0119",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              name: "husbandLastName",
              id: "husband.lastName",
              label: "Nazwisko",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 112,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              name: "husbandPhoneNumber",
              type: "tel",
              id: "husband.phoneNumber",
              label: "Nr telefonu",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 119,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              name: "husbandEmail",
              type: "email",
              id: "husband.email",
              label: "Email",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 127,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              type: "number",
              InputProps: {
                inputProps: {
                  max: 2010,
                  min: 1920
                }
              },
              name: "husbandBirthYear",
              id: "husband.birthYear",
              label: "Rok urodzenia",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 136,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Wsp\xF3lne"
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 150,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              name: "postalCode",
              id: "postalCode",
              label: "Kod pocztowy",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 151,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              type: "number",
              InputProps: {
                inputProps: {
                  maxLength: 4,
                  max: 2010,
                  min: 1920
                }
              },
              name: "weddingYear",
              id: "wife.weddingYear",
              label: "Rok \u015Blubu",
              variant: "outlined",
              required: true
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 158,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
              sx: { minWidth: 120 },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl_default, {
                fullWidth: true,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLabel_default, {
                    id: "city-label",
                    children: "Oddzia\u0142"
                  }, void 0, false, {
                    fileName: "app/routes/create2.tsx",
                    lineNumber: 176,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select_default, {
                    name: "city",
                    labelId: "city-label",
                    id: "city",
                    label: "Oddzia\u0142",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                        value: "Wroc\u0142aw",
                        children: "Wroc\u0142aw"
                      }, void 0, false, {
                        fileName: "app/routes/create2.tsx",
                        lineNumber: 183,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                        value: "Warszawa",
                        children: "Warszawa"
                      }, void 0, false, {
                        fileName: "app/routes/create2.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                        value: "Bia\u0142ystok",
                        children: "Bia\u0142ystok"
                      }, void 0, false, {
                        fileName: "app/routes/create2.tsx",
                        lineNumber: 185,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/create2.tsx",
                    lineNumber: 177,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/create2.tsx",
                lineNumber: 175,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 174,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
              sx: { minWidth: 120 },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl_default, {
                fullWidth: true,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLabel_default, {
                    id: "invitedBy-select-label",
                    children: "Zaproszeni przez"
                  }, void 0, false, {
                    fileName: "app/routes/create2.tsx",
                    lineNumber: 191,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select_default, {
                    labelId: "invitedBy-select-label",
                    id: "invitedBy-select",
                    label: "Zaproszeni przez",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                        value: "Tu",
                        children: "Tu"
                      }, void 0, false, {
                        fileName: "app/routes/create2.tsx",
                        lineNumber: 199,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                        value: "B\u0119d\u0105",
                        children: "B\u0119d\u0105"
                      }, void 0, false, {
                        fileName: "app/routes/create2.tsx",
                        lineNumber: 200,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuItem_default, {
                        value: "R\xF3zne pary",
                        children: "R\xF3zne pary"
                      }, void 0, false, {
                        fileName: "app/routes/create2.tsx",
                        lineNumber: 201,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/create2.tsx",
                    lineNumber: 194,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/create2.tsx",
                lineNumber: 190,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/create2.tsx",
              lineNumber: 189,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/create2.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          size: "large",
          variant: "outlined",
          type: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: "app/routes/create2.tsx",
          lineNumber: 206,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/create2.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/create2.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
export {
  Create as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * @remix-run/cloudflare v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=/build/routes/create2-S32IOQWY.js.map
