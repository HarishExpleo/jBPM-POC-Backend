export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'uiwoM4bIwISmWTCQGVpV1',
    client_secret:
      'oyrWSYbl5rGzDNBpqSt4MLy6jsLh1qHthLLcIk0-o5SqJ7NWUJ58_FwApJ2GAOaDOLJGh9p96raG2-3uIU-New',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
