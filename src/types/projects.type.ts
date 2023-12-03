export interface IProject {
  name: string,
  description: string[],
  parts: string,
  time: string,
  linkWeb: string,
  linkGit: string,
  technologies: readonly string[],
  background: string,
  slug: string,
  isLight?: boolean,
  gif: { gif: any, title: string }[],
}
