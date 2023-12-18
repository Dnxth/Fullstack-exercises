sequenceDiagram
participant user
participant browser
participant server
participant JavaScript

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    user->>browser: Insert new note input
    user->>browser: Click save buttom

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    Note right of browser: Note inside payload

    activate server
    server-->>browser: Status 201 Created
    deactivate server

     browser->>JavaScript: Browser passes the response to JS code
     JavaScript-->>browser: Render DOM
