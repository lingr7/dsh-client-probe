// 探针的宿主半：什么都不做，只保证 bundle 有宿主入口。
export const inject = [];

export function apply(ctx) {
  ctx.effect(() => () => {}, 'dsh-client-probe: noop');
}
