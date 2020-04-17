const applyQueryParams = (url: string, params: Record<string, string>) => {
  return Object.entries(params)
    .reduce(
      (acc, [key, value]) => `${acc}&${key}=${value}`,
      `${url}?`,
    )
}

const urlUtil = {
  applyQueryParams,
}

export default urlUtil
