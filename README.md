# Databricks Embedded AIBI Dashboard

A clean, production-ready frontend template demonstrating how to securely embed a Databricks AI/BI dashboard into a web application using the `@databricks/aibi-client` SDK via a CDN architecture.

## 🚀 Live Demo
You can view the hosted frontend architecture here: 
👉 **[https://omals.github.io/Databricks/](https://omals.github.io/Databricks/)**

*Note: The live demo runs in public display mode using a secure token placeholder. Databricks server authentication requests (401 Unauthorized) are expected and intentional to prevent credential exposure.*

---

## 🛠️ Tech Stack & Architecture
* **Frontend:** Semantic HTML5, CSS3 (Flexbox/Canvas layout)
* **SDK Dependency:** `@databricks/aibi-client` (Loaded dynamically via `esm.sh` CDN)
* **Hosting:** GitHub Pages

---

## 📋 Configuration & Implementation

The application uses a browser-native ESM (ECMAScript Modules) approach, eliminating the need for complex build tools or local Node.js compilation for basic embedding setups.

### Code Snippet
```html
<script type="module">
    import { DatabricksDashboard } from "[https://esm.sh/@databricks/aibi-client](https://esm.sh/@databricks/aibi-client)";

    const dashboard = new DatabricksDashboard({
        instanceUrl: "[https://dbc-298966db-19d5.cloud.databricks.com](https://dbc-298966db-19d5.cloud.databricks.com)",
        workspaceId: "7474654912421722",
        dashboardId: "01f15da3f2df16229164dcab32670c45",
        token: "YOUR_SERVER_MINTED_TOKEN_PLACEHOLDER", // Secured for public repository safety
        container: document.getElementById("dashboard-container"),
    });

    dashboard.initialize();
</script>
