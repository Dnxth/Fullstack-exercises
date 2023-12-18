sequenceDiagram
participant user
participant browser
participant server

    user->>browser: Enter URL

    Note right of user: https://studies.cs.helsinki.fi/exampleapp/spa

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of server: HTML file requests the CSS and Js files

    browser-->>server: CSS file

    browser-->>server: the JavaScript file

    Note right of browser: Js file start executing

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON array
    deactivate server
