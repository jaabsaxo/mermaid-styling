const RefreshExample = `
sequenceDiagram
    actor User
    participant Application
    link Application: Dashboard @ https://dashboard.contoso.com/alice
    User->>+Application: Clicks login
    Application->>+Auth Server: Requests access and refresh token
    Auth Server-->>-Application: returns tokens
    loop Every 20 minutes
      Application-->+Auth Server: Refresh my token pls
      Auth Server-->-Application: new tokens
    end
    Note right of Auth Server: Support notes pls
    loop Some activity
      User->>User: Uses App
    end

        
`;

export default RefreshExample;