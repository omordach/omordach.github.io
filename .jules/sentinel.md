## 2025-02-27 - Unescaped JSON Stringify in dangerouslySetInnerHTML
**Vulnerability:** Usage of `JSON.stringify` directly in `dangerouslySetInnerHTML` for a `<script type="application/ld+json">` tag.
**Learning:** Even if the JSON object is currently static, failing to escape `<` to `\\u003c` in stringified JSON inserted into HTML creates an XSS vulnerability pattern. If dynamic, user-controlled data is ever introduced into the JSON structure, it could be used to prematurely close the `<script>` tag (e.g., via `</script>`) and inject malicious HTML/JavaScript.
**Prevention:** Always escape `<` characters when embedding JSON into HTML `<script>` tags by appending `.replace(/</g, '\\u003c')` to `JSON.stringify`.
