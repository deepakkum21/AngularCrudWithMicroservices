# Proxy in Angular to avoid CORS Problem
-----------------------------------------

1. **Create a proxy-config.json**
- eg.

        {
            "/api/employee/*": {
                "target": "http://localhost:8002",
                "secure": false,
                "logLevel": "debug",
                "changeOrigin": true,
                "pathRewrite": {
                    "^/api": ""
                }
            }
        }

2. **Modify package.json to activate the proxy**
-   `"start": "ng serve --proxy-config proxy-config.json"`

3. **Modify the calling of the spring service**
-   from `'http://localhost:8002/employee'` to `/api/employee`