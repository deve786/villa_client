import { createClient } from "@sanity/client";

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const client = createClient({
  projectId: "woxcbquj",
  dataset: "production",
  apiVersion: getCurrentDate(),
  token:
    "skkK88aVHSUkl4ZjYpoiyU6yY6oeiHK2ZY5R9pLzBf1DBI2Pq26b2ir2TGXZdcbrAMHOkaGBP0ER79GRnzXy6Ajq4g3AXgc5Yslxi1mFH8SnlzylCi2p0BcfBxXxkuxo1iXVLY76z7JPJWeq4biWxtB9iOXw5W5A4AFNbd7tt438nNXVQEy9",
  useCdn: true,
});

export { client as sanityClient };