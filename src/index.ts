import { completion } from 'completion-tag'

export async function completiontemplate(
  literals: string | readonly string[],
  ...args: any[]
): Promise<string> {
  if (typeof literals === 'string') {
    literals = [literals];
  }
  let str = literals[0]
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg && arg.kind === 'Document') {
      str += await completion`${arg.loc.source.body}`
    } else {
      str += await completion`${arg}`
    }
    str += literals[i + 1]
  }
  return str
}
