

// App paths
export const pathsPublic: { [k: string]: string } = {
  home: '/',
  productDetails: '/product/:idOrSlug',
};

export const pathsPrivate: { [k: string]: string } = {
  accountSettings: '/account-settings',
};

export const paths: { [k: string]: string } = Object.assign({}, pathsPublic, pathsPrivate);

// Check if pathname matches to one of given key from paths argument
export const checkPathMatch = (
  pathname: string,
  paths: { [k: string]: string }
) => {
  const pathFirstSection = pathname.split('/')[1];

  const allPaths = Object.values(paths)
    .map((path) => path.split('/')[1]) // отримаємо першу секцію
    .filter(Boolean); // прибираємо undefined

  return allPaths.includes(pathFirstSection);
};

