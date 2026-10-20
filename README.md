# Creator Hub Office

A separate, original-brand early-access office workspace starter with four responsive tools: Writer, Sheets, Slides, and Drive. It does not connect to or modify other Creator Hub projects.

## Requirements
- Node.js 20 or newer
- A modern browser (Chrome/Edge/Firefox/Safari)

## Run locally
```bash
npm install
npm run check
npm test
npm start
```
Open `http://localhost:4173` on the computer running the server. On a phone on the same Wi-Fi, open `http://<computer-LAN-IP>:4173` if the local network firewall allows it.

No production API keys or environment secrets are needed for this local starter. `PORT` may be set to change the port.

## Included now
- Responsive dashboard and navigation.
- Writer: basic rich-text formatting, browser-local editing, save to local browser storage, export as HTML.
- Sheets: editable grid, simple arithmetic formulas (`=1+2*3`), add rows, save locally, export CSV.
- Slides: add/navigate slides, edit title/body, save locally, export slide data as JSON.
- Drive: list saved native work items, search, import file names into a local list, and download saved native work data.
- Small dependency-free Node HTTP server with basic security headers and Node test suite.

## Important limitations
This is a starter application, not a finished Microsoft Office replacement. It does not yet read/write native DOCX, XLSX, or PPTX files; HTML, CSV, and JSON exports are the implemented export formats. Writer/Sheets/Slides save in browser `localStorage`, which is device/browser-specific and can be cleared. Imported files are listed but their bytes are not uploaded or retained. There is no account system, cloud sync, sharing, co-authoring, server database, or cloud Drive backend yet. Formula support is deliberately limited to basic numeric arithmetic; no cell-reference formulas or spreadsheet functions are implemented. Slide exports are JSON data, not PPTX.

## Suggested next implementation phase
1. Add user authentication and a real database-backed file API.
2. Add secure object storage, file-size/type limits, and account-scoped permissions.
3. Implement DOCX/XLSX/PPTX import/export using well-supported libraries and round-trip tests.
4. Add formula parsing, ranges, functions, charts, and spreadsheet accessibility.
5. Add PPTX export and slide themes/layouts.
6. Add autosave conflict handling, cloud sync, and collaborative editing.
7. Run browser/device tests and security review before production use.

## Security notes
The local starter has no login or cloud API. Do not treat local browser storage as secure storage for sensitive documents. Before production, add authentication, authorization, CSRF strategy for stateful APIs, upload scanning, rate limits, audit logs, backups, privacy disclosures, and deployment-specific security review.
