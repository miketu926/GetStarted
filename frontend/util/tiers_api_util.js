export const fetchTiers = (projectId) => {
  return $.ajax({
    type: "GET",
    url: `/api/projects/${projectId}/tiers`,
  });
};

export const createTier = (tier, projectId) => {
  return $.ajax({
    type: "POST",
    url: `/api/projects/${projectId}/tiers`,
    data: tier,
  });
};