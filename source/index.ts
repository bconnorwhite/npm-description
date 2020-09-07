import fetch from "cross-fetch";

async function request(name: string) {
  return fetch(`https://registry.npmjs.org/${name}`).then((res) => res.json());
}

export async function getDescription(name: string) {
  return request(name).then(({ description }: { description: string }) => description);
}

export type Descriptions = {
  [name: string]: string;
}

export async function getDescriptions(names: string[]) {
  const promises: Promise<string>[] = [];
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

