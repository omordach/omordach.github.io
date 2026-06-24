## 2024-06-24 - Missing `noopener` attribute on external links
**Vulnerability:** External links with `target="_blank"` were missing the `noopener` attribute in the `rel` tag.
**Learning:** This exposes the application to reverse tabnabbing, allowing the newly opened page to potentially access and manipulate the `window.opener` object of the original page.
**Prevention:** Always ensure `rel="noopener noreferrer"` is used whenever `target="_blank"` is applied to an anchor tag linking to an external site.
