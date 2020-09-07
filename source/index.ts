import fetch from "cross-fetch-json";

type Result = {
  description: string;
}

async function request(name: string) {
  return fetch<Result>(`https://registry.npmjs.org/${name}`);
}

export async function getDescription(name: string) {
  return request(name).then((result) => result?.description);
}

export type Descriptions = {
  [name: string]: string | undefined;
}

export async function getDescriptions(names: string[]) {
  const promises: Promise<string | undefined>[] = [];
  names.forEach((name) => {
    promises.push(getDescription(name));
  });
  return Promise.all(promises).then((descriptions) => {
    return names.reduce((retval, name, index) => {
      retval[name] = descriptions[index];
      return retval;
    }, {} as Descriptions);
  });
}

