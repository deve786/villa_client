import { createClient } from "@sanity/client";

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const client = createClient({
  projectId: "vbkevby9",
  dataset: "production",
  apiVersion: getCurrentDate(),
  token:
  "sk1ooje2i5KFAIwPBWrqLbJSCPfyGMMJMwCiB31h2Wz4aU0t64rFni8TS0nrkV4TkMK9rfu9uIJBwsxnD7H2XIvVEhD5Z6Gg7iTOvuJsZUbspX3589jdi2liXifUZ2oi0IAyKpxV5BmT7QTvSkQAUxuO10OnXlb9J1dqFdA8PUsvKw7RvJE9",
  useCdn: true,
});

export { client as sanityClient };