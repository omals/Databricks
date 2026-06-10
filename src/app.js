import { DatabricksDashboard } from "@databricks/aibi-client";

const dashboard = new DatabricksDashboard({
  instanceUrl: "https://dbc-298966db-19d5.cloud.databricks.com",
  workspaceId: "7474654912421722",
  dashboardId: "01f15da3f2df16229164dcab32670c45",
  token: "<<CREATED_BY_YOUR_SERVER>>", // This token should be minted by your server
  container: document.getElementById("dashboard-container"),
});

dashboard.initialize();
