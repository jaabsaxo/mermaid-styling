const SequenceExample = `
sequenceDiagram
    actor User
    User->>+Application: Clicks login
    Application->>+Auth Server: GET /authorize
    Auth Server-->>-User: Prompts login
    User->>+SSO Server: Logs in with user name and password
    SSO Server -->>- Application: Redirects to redirect_url with authorization code
    Application ->> Auth Server: Requests access token and refresh token
        
`;

export default SequenceExample;