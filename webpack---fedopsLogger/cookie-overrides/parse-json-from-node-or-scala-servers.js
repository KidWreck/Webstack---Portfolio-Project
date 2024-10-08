export function parseJsonFromNodeOrScalaServers(rawPayload) {
  function attemptToParseJsonRecursivelySinceScalaServersSerializeItTwice() {
    try {
      return JSON.parse(JSON.parse(rawPayload));
    } catch (err) {
      return null;
    }
  }

  function attemptURIDecodeAndParseJsonSinceNodeServersUseWithURIEncoding() {
    try {
      return JSON.parse(decodeURIComponent(rawPayload));
    } catch (err) {
      return null;
    }
  }

  return (
    attemptToParseJsonRecursivelySinceScalaServersSerializeItTwice() ||
    attemptURIDecodeAndParseJsonSinceNodeServersUseWithURIEncoding()
  );
}
