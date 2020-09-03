import client from "./client";

const endpointListing = "/listings";
const endpointMessages = "/messages";
const endpointCategories = "/categories";
const endpointGases = "/gases";
const endpointFruits = "/fruits";
const endpointWeight = "/weight";
const endpointTime = "/time";
const endpointImageUrl = "/imageUrl";
const endpointfreshnessData = "/freshnessData";

const getListings = () => client.get(endpointListing);
const getMessages = () => client.get(endpointMessages);
const getCategories = () => client.get(endpointCategories);
const getGases = () => client.get(endpointGases);
const getFruits = () => client.get(endpointFruits);
const getWeight = () => client.get(endpointWeight);
const getTime = () => client.get(endpointTime);
const getImageUrl = () => client.get(endpointImageUrl);
const getFreshnessData = () => client.get(endpointfreshnessData);

export default {
  getListings,
  getMessages,
  getGases,
  getCategories,
  getFruits,
  getWeight,
  getTime,
  getImageUrl,
  getFreshnessData,
};
