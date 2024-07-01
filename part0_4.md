```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: HTTP POST new_note
    server->>browser: HTTP GET notes

    browser->>server: GET main css
    server->>browser: main css

    browser->>server: GET main JS
    server->>browser: main JS

    browser->>server: GET data JSON
    server->>browser: data JSON
```